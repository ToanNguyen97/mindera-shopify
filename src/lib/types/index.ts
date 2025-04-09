export enum SortOption {
  PRICE_LOW_HIGH = 'PRICE_LOW_HIGH',
  PRICE_HIGH_LOW = 'PRICE_HIGH_LOW'
}

export type ExtractVariables<T> = T extends { variables: object } ? T['variables'] : never;

export type ShopifyFetchOptions<T> = {
  cache?: RequestCache;
  headers?: HeadersInit;
  query?: string;
  tags?: string[];
  variables?: ExtractVariables<T>;
};

export type ShopifyFetchResponse<T> = {
  status: number;
  body: T;
};
