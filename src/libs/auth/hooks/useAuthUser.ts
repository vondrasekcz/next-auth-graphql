import { AuthUserFragment, useCurrentUserQuery, } from '@/apollo/graphql';


export const useAuthUser = (): AuthUserFragment | null => useCurrentUserQuery({
  fetchPolicy: 'cache-only',
}).data?.currentUser || null;
