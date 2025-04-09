import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@shop/lib/types/product';
import { formatPrice } from '@shop/lib/utils/format';
import { getProductImage } from '@shop/lib/utils/format';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { title, handle, priceRange } = product;
  const image = getProductImage(product.images);

  const price = formatPrice(
    priceRange.minVariantPrice.amount,
    priceRange.minVariantPrice.currencyCode
  );

  return (
    <Link href={`/products/${encodeURIComponent(handle)}`} className="block outline-none">
      <div className={className}>
        <div className="mb-2">
          <div className="relative aspect-square overflow-hidden bg-gray-400">
            {image ? (
              <Image
                src={image.url}
                alt={image.altText || title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 45vw"
                className="object-cover"
                priority={false}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200">
                <span className="text-sm text-gray-500">No image</span>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-normal">{title}</h3>
          <p className="text-sm font-medium">
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
}