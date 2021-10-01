export const isServer = (): boolean => typeof window === 'undefined';

export const isProduction = (): boolean => process.env.NODE_ENV === 'production';
