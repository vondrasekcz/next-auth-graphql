let accessToken: string | null = null;

export const setAccessToken = (s: string | null): void => {
  accessToken = s;
};

export const getAccessToken = (): string | null => {
  return accessToken;
};
