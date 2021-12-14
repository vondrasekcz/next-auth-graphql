import Router from 'next/router';

import type { PageComponentWithLayout, } from '@/types/common';


const loginPath = '/public';


// TODO
// - types
// - get user


export const withPrivatePage = (WrappedComponent: PageComponentWithLayout) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getLayout = WrappedComponent?.getLayout || undefined;
  hocComponent.getIintialProps = async (context: any) => {
    const isAuthenticated = true;

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

  return hocComponent;
};
