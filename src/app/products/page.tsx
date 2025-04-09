import { Suspense } from 'react';
import { ProductsLoading } from '@shop/components/loading/products';
import { ProductsModule } from '@shop/modules/products';
import { HeroModule } from '@shop/modules/hero';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ProductsPage() {

  return (
    <div className='pb-16'>
      <HeroModule/>
      <Suspense fallback={<ProductsLoading />}>
        <ProductsModule />
      </Suspense>
    </div>
  );
}
