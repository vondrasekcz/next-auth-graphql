import type { AppProps, } from 'next/app';

import { withApollo, } from '@/apollo/withApollo';
import type { PageComponentWithLayout, } from '@/types/common';
import { ApolloClient, NormalizedCacheObject, } from '@apollo/client';


interface Props extends Omit<AppProps, 'Component'> {
  Component: PageComponentWithLayout,
  apolloClient: ApolloClient<NormalizedCacheObject>,
}


const MyApp = ({
  Component,
  pageProps,
  apolloClient,
}: Props): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Component
      {...pageProps}
      apolloClient={apolloClient}
    />
  );
};


export default withApollo(MyApp);
