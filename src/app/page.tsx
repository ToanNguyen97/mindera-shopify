
import { Suspense } from 'react';
import { ProductsLoading } from '@shop/components/loading/products';
import { HeroModule } from '@shop/modules/hero';
import { ProductsModule } from '@shop/modules/products';

export const revalidate = 3600;

const HomePage = () => {

  return (
    <div>
      <HeroModule/>
      <Suspense fallback={<ProductsLoading />}>
        <ProductsModule />
      </Suspense>
    </div>
  );
}

export default HomePage;
