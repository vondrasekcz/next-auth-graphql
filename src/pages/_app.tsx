import { NextComponentType, NextPageContext, } from 'next';
import type { AppProps, } from 'next/app';

import type { GetLayout, } from '@/types/common';


interface Props<P = Record<string, unknown>> extends Omit<AppProps, 'Component'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: NextComponentType<NextPageContext, any, P> & { getLayout?: GetLayout },
}


const MyApp = ({
  Component,
  pageProps,
}: Props): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(<Component {...pageProps} />);
};


export default MyApp;
