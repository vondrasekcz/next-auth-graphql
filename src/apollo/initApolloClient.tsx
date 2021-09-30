import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { isServer, } from '@/utils/common';


let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;


const createApolloClient = (initialState: NormalizedCacheObject = {}): ApolloClient<NormalizedCacheObject> => {
  const link = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HTTP_LINK,
    credentials: 'include',
  });

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


export const initApolloClient = (initState?: NormalizedCacheObject): ApolloClient<NormalizedCacheObject> => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer()) {
    return createApolloClient(initState);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initState);
  }

  return globalApolloClient;
};
