import type { AppProps, } from 'next/app';

import type { GetLayout, } from '@/types/common';


interface Props extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { getLayout?: GetLayout },
}


const MyApp = ({
  Component,
  pageProps,
}: Props): JSX.Element => {
  const getLayout = Component.getLayout || ((page) => page);


  return getLayout(<Component {...pageProps} />);
};


export default MyApp;
