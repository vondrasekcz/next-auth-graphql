/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentClass, FunctionComponent, } from 'react';
import { NextPage, NextPageContext, } from 'next';
import App, { AppContext, } from 'next/app';
import cookie from 'cookie';

import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import {
  CurrentUserDocument,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  RefreshTokenDocument,
  RefreshTokenMutation,
  RefreshTokenMutationVariables,
} from './graphql';
import { isProduction, isServer, } from '@/utils/common';
import { initApolloClient, } from './initApolloClient';
import { getAccessToken, setAccessToken, } from '@/libs/accessTokenStore';


type WithApolloOptions = {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  apolloState: NormalizedCacheObject;
  serverAccessToken?: string | null,
};

type ContextWithApolloOptions =
  AppContext
  & { ctx: { apolloClient: WithApolloOptions['apolloClient'] }, }
  & NextPageContext
  & WithApolloOptions;


/**
 * IMPORTANT: No support Next Page with withApollo
 */

export const withApollo = <P, IP>(
  PageComponent: NextPage<P, IP>,
  { ssr = true, } = {},
): ComponentClass<P> | FunctionComponent<P> => {
  const WithApollo = ({
    apolloClient,
    apolloState,
    serverAccessToken,
    ...pageProps
  }: any): JSX.Element => {
    if (!isServer() && !getAccessToken) {
      setAccessToken(serverAccessToken);
    }
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} apolloClient={client} />
      </ApolloProvider>
    );
  };


  if (!isProduction()) {
    console.warn(
      'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.'
      + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization'
    );
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithApollo.displayName = `withApollo(${displayName})`;
  }


  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: ContextWithApolloOptions) => {
      const inAppContext = Boolean(ctx.ctx);
      let serverAccessToken: string | null = null;

      const {
        AppTree,
        ctx: { req, res, } = {},
      } = ctx;

      // 1. create apollo client
      // 2. authenticate
      // 3. add apollo client to context

      // TODO - in page context -> initOnContext
      let apolloClient = initApolloClient({});

      if (isServer()) {
        // 1. check cookies
        // 2. refresh token
        // 3. get current user
        // 4. create ApolloClient with new accessToken
        try {
          const cookies = cookie.parse(req?.headers.cookie || '');

          if (cookies.refreshToken) {
            const responseRefreshToken = await apolloClient.mutate<RefreshTokenMutation, RefreshTokenMutationVariables>({
              mutation: RefreshTokenDocument,
              fetchPolicy: 'no-cache',
              context: {
                headers: {
                  cookie: `refreshToken=${cookies.refreshToken}`,
                },
              },
            });

            const newAccessToken = responseRefreshToken.data?.refreshToken.accessToken;
            if (!newAccessToken) throw new Error('withApollo - no AccessToken');

            const responseCurrentUser = await apolloClient.query<CurrentUserQuery, CurrentUserQueryVariables>({
              query: CurrentUserDocument,
              context: {
                headers: {
                  Authorization: `Bearer ${newAccessToken || ''}`,
                },
              },
            });

            if (!responseCurrentUser.data.currentUser) throw new Error('withApollo - no Current user');

            serverAccessToken = newAccessToken;
            apolloClient = initApolloClient(apolloClient.cache.extract(), newAccessToken);
          }
        } catch (error) {
          // ignore error
        }
      }

      // set upt context apolloClient
      ctx.ctx.apolloClient = apolloClient;


      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx);
      }

      if (isServer()) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res?.writableEnded) {
          return pageProps;
        }

        // Run all GraphQL queries in the component tree
        // and extract the resulting data
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
        // server fetched accessToken
        serverAccessToken,
      };
    };
  }

  return WithApollo;
};
