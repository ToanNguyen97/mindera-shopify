import { shopifyFetch } from '../index';
import { getProductsQuery } from '../queries/product';
import { Product, ProductsOperation } from '../../types/product';
import { PageInfo } from '../../types/shopify';

/**
 * Get Products
 * @param first - The number of products to return
 * @param after - The cursor to start from
 * @param sort - The sort order
 * @returns The products and page info
 */
export const getProducts = async (options: ProductsOperation['variables']): Promise<{
  products: Product[];
  pageInfo: PageInfo;
}> => {

  const { body } = await shopifyFetch<ProductsOperation>({
    query: getProductsQuery,
    variables: options,
  });
  const products = body.products.edges.map(({ node }) => node);

  return {
    products,
    pageInfo: body.products.pageInfo,
  };
}
