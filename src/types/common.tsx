import type { AppProps, } from 'next/app';
import { NextPageContext, } from 'next';
import { ApolloClient, NormalizedCacheObject, } from '@apollo/client';


// NEXT pages
export type GetLayout = (page: JSX.Element) => JSX.Element;
export type PageComponentWithLayout = AppProps['Component'] & { getLayout?: GetLayout };
export interface CustomPageContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>,
  serverAccessToken: string | null,
}
