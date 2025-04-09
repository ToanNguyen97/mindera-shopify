import { Money, Image, Connection, SEO, Edge, PageInfo } from "./shopify";

export type ProductVariant = {
  id: string;
  title: string;
  price: Money;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Connection<Image>;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ProductsOperation = {
  products: {
    edges: Edge<Product>[],
    pageInfo: PageInfo;
  }
  variables: {
    first: number;
    after?: string;
    sortKey?: string;
    reverse?: boolean;
    query?: string;
  }
}