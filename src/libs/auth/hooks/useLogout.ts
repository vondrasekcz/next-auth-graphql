import { useCallback, } from 'react';
import { useApolloClient, } from '@apollo/client';

import { useLogoutMutation, } from '@/apollo/graphql';
import { setAccessToken, } from '@/libs/accessTokenStore';


export const useLogout = () => {
  const apolloClient = useApolloClient();

  const handleCompleted = useCallback(
    () => {
      setAccessToken(null);
      apolloClient.resetStore();
    },
    [ apolloClient, ],
  );

  return useLogoutMutation({
    onCompleted: handleCompleted,
  });
};
