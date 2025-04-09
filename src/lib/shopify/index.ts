import { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN, SHOPIFY_API_VERSION } from "../configs/shopify";
import { ShopifyFetchOptions, ShopifyFetchResponse } from "../types";

/**
 * Shopify API Fetch
 * @param query - The query to execute
 * @param variables - The variables to pass to the query
 * @returns The response from the Shopify API
 */
export const shopifyFetch = async <T>({
  cache = 'force-cache',
  headers,
  query,
  variables,
}: ShopifyFetchOptions<T>): Promise<ShopifyFetchResponse<T>> => {
  try {
    if (!SHOPIFY_STORE_DOMAIN || !SHOPIFY_STOREFRONT_ACCESS_TOKEN || !SHOPIFY_API_VERSION) {
      throw new Error('Shopify configuration is missing');
    }

    const result = await fetch(
      `https://${SHOPIFY_STORE_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
          ...headers,
        },
        cache,
        body: JSON.stringify({
          query,
          variables,
        }),
      }
    );

    const json = await result.json();
    return {
      status: result.status,
      body: json.data as T,
    };
  } catch (error) {
    return {
      status: 500,
      body: { error: (error as Error).message } as T,
    };
  }
}