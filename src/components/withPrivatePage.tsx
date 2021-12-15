import Router from 'next/router';

import type { CustomPageContext, PageComponentWithLayout, } from '@/types/common';
import { getAccessToken, } from '@/libs/accessTokenStore';
import { CurrentUserDocument, } from '@/apollo/graphql';
import { isServer, } from '@/utils/common';


const loginPath = '/public';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withPrivatePage = (WrappedComponent: PageComponentWithLayout) => {
  const HOCComponent = ({ ...props }) => <WrappedComponent {...props} />;

  HOCComponent.getLayout = WrappedComponent?.getLayout || undefined;
  HOCComponent.getInitialProps = async (context: CustomPageContext) => {
    let isAuthenticated = false;

    // auth checker
    try {
      const accessToken = isServer() ? context?.serverAccessToken : getAccessToken();

      if (accessToken) {
        const authUser = await context.apolloClient.query({
          query: CurrentUserDocument,
          fetchPolicy: 'cache-only',
        });
        if (authUser) isAuthenticated = true;
      }
    } catch (error) {
      // ignore error
    }

    if (!isAuthenticated) {
      // server
      if (context.res) {
        context.res?.writeHead(302, {
          Location: loginPath,
        });
        context.res?.end();
      // client
      } else {
        Router.replace(loginPath);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, });
      return { ...wrappedProps, };
    }

    return {};
  };

  return HOCComponent;
};
