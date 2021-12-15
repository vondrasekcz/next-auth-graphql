import Router from 'next/router';

import type { PageComponentWithLayout, } from '@/types/common';
import { getAccessToken } from '@/libs/accessTokenStore';


const loginPath = '/public';


// TODO
// - get user


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const withPrivatePage = (WrappedComponent: PageComponentWithLayout) => {
  const HOCComponent = ({ ...props }) => <WrappedComponent {...props} />;

  HOCComponent.getLayout = WrappedComponent?.getLayout || undefined;
  HOCComponent.getInitialProps = async (context: any) => {
    const isAuthenticated = !!getAccessToken();

    console.log('AT', isAuthenticated, getAccessToken())

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
      const wrappedProps = await WrappedComponent.getInitialProps({ ...context, isAuthenticated, });
      return { ...wrappedProps, isAuthenticated, };
    }

    return { isAuthenticated, };
  };

  return HOCComponent;
};
