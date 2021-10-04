import jwtDecode from 'jwt-decode';
import { TokenRefreshLink, } from 'apollo-link-token-refresh';

import { getAccessToken, setAccessToken, } from '@/libs/accessTokenStore';
import { TokenFragment, } from './graphql';


type FetchMutationRefreshArgs = {
  headers?: { [key: string]: string }
};

export const fetchMutationRefresh = ({
  headers,
}: FetchMutationRefreshArgs = {}): Promise<Response> => fetch(process.env.NEXT_PUBLIC_HTTP_LINK as string, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
  credentials: 'include',
  body: JSON.stringify({
    query: `mutation RefreshToken {
      refreshToken {
        accessToken
      }
    }`,
  }),
});


type DecodedToken = {
  exp: number,
};

export const isAccessTokenValidOrUndefined = (): boolean => {
  const token = getAccessToken();
  if (!token) {
    return true;
  }

  try {
    const { exp, } = jwtDecode(token) as DecodedToken;
    const expiredDate = (exp * 1000) - 2000;
    if (Date.now() >= expiredDate) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
};


const handleRefreshCompleted = (
  { accessToken, }: TokenFragment
): void => {
  if (accessToken) setAccessToken(accessToken);
  else setAccessToken(null);
};


const handleRefreshError = (error: unknown) => {
  // TODO - remove access token if unauthorized
};


export const createRefreshLink = (): TokenRefreshLink<TokenFragment> => new TokenRefreshLink<TokenFragment>({
  accessTokenField: 'refresh',
  isTokenValidOrUndefined: isAccessTokenValidOrUndefined,
  fetchAccessToken: fetchMutationRefresh,
  handleFetch: handleRefreshCompleted,
  handleError: handleRefreshError,
});
