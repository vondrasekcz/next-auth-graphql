import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  NormalizedCacheObject,
  from,
} from '@apollo/client';

import { isServer, } from '@/utils/common';
import { getAccessToken, } from '@/libs/accessTokenStore';
import { createRefreshLink, } from './createRefreshLink';


let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;


const createApolloClient = (
  initialState: NormalizedCacheObject = {},
  serverAccessToken?: string | null,
): ApolloClient<NormalizedCacheObject> => {
  const httpTerminatingLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HTTP_LINK,
    credentials: 'include',
  });

  const httpAuthLink = new ApolloLink((operation, forward) => {
    const accessToken = isServer() ? serverAccessToken : getAccessToken();
    operation.setContext(({ headers = {}, }) => ({
      headers: {
        Authorization: `Bearer ${accessToken || ''}`,
        ...headers,
      },
    }));
    return forward(operation);
  });

  const refreshLink = createRefreshLink();

  const link = from([
    refreshLink,
    httpAuthLink,
    httpTerminatingLink,
  ]);

  const apolloClient = new ApolloClient({
    ssrMode: isServer(), // Disables forceFetch on the server (so queries are only run once)
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-first',
      },
    },
    cache: new InMemoryCache().restore(initialState),
  });

  return apolloClient;
};


export const initApolloClient = (initState?: NormalizedCacheObject, serverAccessToken?: string | null): ApolloClient<NormalizedCacheObject> => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer()) {
    return createApolloClient(initState, serverAccessToken);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initState);
  }

  return globalApolloClient;
};
