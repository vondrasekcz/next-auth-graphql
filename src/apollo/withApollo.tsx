import { ComponentClass, FunctionComponent, } from 'react';
import { NextPage, NextPageContext, } from 'next';
import App, { AppContext, } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';

import { initApolloClient, } from './initApolloClient';
import { isProduction, isServer, } from '@/utils/common';


type WithApolloOptions = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  apolloState: NormalizedCacheObject;
};

type ContextWithApolloOptions =
  AppContext
  & { ctx: { apolloClient: WithApolloOptions['apolloClient'] }, }
  & NextPageContext
  & WithApolloOptions;


export const withApollo = <P, IP>(
  PageComponent: NextPage<P, IP>,
  { ssr = true, } = {},
): ComponentClass<P> | FunctionComponent<P> => {
  const WithApollo = ({
    apolloClient,
    apolloState,
    ...pageProps
  }: any): JSX.Element => {
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} apolloClient={client} />
      </ApolloProvider>
    );
  };


  if (!isProduction()) {
    // to enable Automatic Static Optimization move withApollo to Next Pages
    // modify withApollo: https://github.com/adamsoffer/next-apollo/blob/master/src/withApollo.tsx
    console.warn(
      'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.'
      + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization'
    );

    // Set the correct displayName in development
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithApollo.displayName = `withApollo(${displayName})`;
  }


  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: ContextWithApolloOptions) => {
      const inAppContext = Boolean(ctx.ctx);

      const {
        AppTree,
        ctx: { res, } = {},
      } = ctx;

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apolloClient = (ctx.ctx.apolloClient = initApolloClient({}));


      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx);
      }


      // Only on the server
      if (isServer()) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res?.writableEnded) {
          return pageProps;
        }

        if (ssr && AppTree) {
          // Run all GraphQL queries
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const { getDataFromTree, } = await import('@apollo/client/react/ssr');

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props;
            if (inAppContext) {
              props = { ...pageProps, apolloClient, };
            } else {
              props = { pageProps: { ...pageProps, apolloClient, }, };
            }

            // Take the Next.js AppTree, determine which queries are needed to render,
            // and fetch them. This method can be pretty slow since it renders
            // your entire AppTree once for every query. Check out apollo fragments
            // if you want to reduce the number of rerenders.
            // https://www.apollographql.com/docs/react/data/fragments/

            await getDataFromTree(<AppTree {...props as any} />);
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        // Extract query data from the Apollo store
        apolloState,
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient,
      };
    };
  }

  return WithApollo;
};
