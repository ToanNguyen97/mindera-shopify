'use client';
import { useState, useEffect, useCallback, useMemo } from 'react';

import { getProducts } from '@shop/lib/shopify/apis/product';
import { Button } from '@shop/components/ui/button';
import { ProductCard } from '@shop/components/cards/product.card';
import { ProductCardLoading } from '@shop/components/loading/product-card';
import { If } from '@shop/components/if';
import { Product } from '@shop/lib/types/product';
import { ArrowUpDown, Loader2, SlidersHorizontal } from 'lucide-react';

const PRODUCT_COUNT = 12;
export const ProductsModule = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cursor, setCursor] = useState<string | null>();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSortLowToHigh, setIsSortLowToHigh] = useState<boolean>(true);

  const fetchProducts = useCallback(async (resetProducts = false) => {
    setIsLoading(true);
    try {
      const { products: newProducts, pageInfo } = await getProducts({
        first: PRODUCT_COUNT,
        after: resetProducts ? undefined : cursor || undefined,
        sortKey: 'PRICE',
        reverse: isSortLowToHigh
      });

      setProducts(prev => resetProducts ? newProducts : [...prev, ...newProducts]);
      setCursor(pageInfo.endCursor);
      setHasMore(pageInfo.hasNextPage);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cursor, isSortLowToHigh]);

  useEffect(() => {
    fetchProducts(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSortLowToHigh]);

  const handleSortChange = useCallback((isSortLowToHigh: boolean) => {
    setIsSortLowToHigh(isSortLowToHigh);
    setCursor(null);
    setHasMore(true);
    setProducts([]);
  }, []);

  const handleLoadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      fetchProducts();
    }
  }, [fetchProducts, hasMore, isLoading]);

  const renderProducts = useMemo(() => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }, [products]);

  return (
    <section className="space-y-6 max-w-6xl mx-auto">
      <div className='grid grid-cols-2 border border-t-0 border-gray-200'>
        <Button
          onClick={() => handleSortChange(!isSortLowToHigh)}
          variant="ghost"
          className='rounded-none uppercase h-10 border-r border-gray-200 flex items-center justify-center gap-x-2'
        >
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Button>
        <Button
          variant="ghost"
          className='uppercase h-10 rounded-none border-gray-200 flex items-center justify-center gap-x-2'
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <If condition={renderProducts.length > 0}>
          {renderProducts}
        </If>
        <If condition={isLoading}>
          {
            Array.from({ length: PRODUCT_COUNT }).map((_, index) => (
              <ProductCardLoading key={index} />
            ))
          }
        </If>
      </div>
      <If condition={hasMore}>
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            onClick={handleLoadMore}
            disabled={isLoading}
            className="px-8 rounded-none"
          >
            <If condition={isLoading}>
              <Loader2 className="w-4 h-4 animate-spin" />
            </If>
            Load More
          </Button>
        </div>
      </If>
    </section>
  );
}