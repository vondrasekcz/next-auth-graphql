import type { AppProps, } from 'next/app';

export type GetLayout = (page: JSX.Element) => JSX.Element;
export type PageComponentWithLayout = AppProps['Component'] & { getLayout?: GetLayout };
