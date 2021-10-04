import { useState, useCallback, } from 'react';
import { useApolloClient, ApolloError, MutationOptions, } from '@apollo/client';

import {
  LoginMutation,
  MutationLoginArgs,
  CurrentUserQuery,
  LoginDocument,
  CurrentUserDocument,
} from '@/apollo/graphql';
import {
  setAccessToken,
} from '@/libs/accessTokenStore';


type UseLogin = [
  (options: Omit<MutationOptions<LoginMutation, MutationLoginArgs>, 'mutation' | 'fetchPolicy'>
  ) => Promise<void>,
  {
    loading: boolean
    error: ApolloError | Error | null
  },
];


export const useLogin = (): UseLogin => {
  const [ loading, setLoading, ] = useState(false);
  const [ error, setError, ] = useState<ApolloError | Error | null>(null);

  const apolloClient = useApolloClient();

  const login = useCallback(
    async (options = {}) => {
      try {
        setLoading(true);
        if (error) setError(null);

        // login
        const responseLogin = await apolloClient.mutate<LoginMutation, MutationLoginArgs>({
          ...options,
          mutation: LoginDocument,
          fetchPolicy: 'no-cache',
        });

        const accessToken = responseLogin?.data?.login?.token?.accessToken;

        if (!accessToken) throw new Error('No accessToken');
        setAccessToken(accessToken);


        // user
        const responseUser = await apolloClient.query<CurrentUserQuery>({
          query: CurrentUserDocument,
          fetchPolicy: 'network-only',
        });

        const user = responseUser?.data?.currentUser;
        if (!user) throw new Error('No user');


        setLoading(false);
      } catch (err) {
        setAccessToken(null);
        setLoading(false);
        setError(err as ApolloError | Error);
      }
    },
    [ apolloClient, error, ],
  );


  return [ login, { loading, error, }, ];
};
