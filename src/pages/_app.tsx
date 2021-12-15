import type { AppProps, } from 'next/app';

import { withApollo, } from '@/apollo/withApollo';
import type { PageComponentWithLayout, } from '@/types/common';


interface Props extends Omit<AppProps, 'Component'> {
  Component: PageComponentWithLayout,
}


const MyApp = ({
  Component,
  pageProps,
}: Props): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Component
      {...pageProps}
    />
  );
};


export default withApollo(MyApp);
