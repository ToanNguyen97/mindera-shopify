import { Skeleton } from "../ui/skeleton";
import { ProductCardLoading } from "./product-card";


interface ProductsLoadingProps {
  count?: number;
}

export const ProductsLoading = ({ count = 12 }: ProductsLoadingProps) => {
  return (
    <div className="w-full space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between">
        <Skeleton className="h-10 w-full max-w-1/2 border-r rounded-none" />
        <Skeleton className="h-10 w-full max-w-1/2 rounded-none" />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: count }).map((_, index) => (
          <ProductCardLoading key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}