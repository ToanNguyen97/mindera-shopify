import { Skeleton } from "../ui/skeleton";

export const ProductCardLoading = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="aspect-square bg-gray-200"></Skeleton>
      <Skeleton className="h-4 w-full bg-gray-200"></Skeleton>
      <Skeleton className="h-4 w-1/3 bg-gray-200"></Skeleton>
    </div>
  );
}