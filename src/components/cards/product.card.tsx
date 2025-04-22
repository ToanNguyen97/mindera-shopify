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
    <Link
      href={`/products/${encodeURIComponent(handle)}`}
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md transition-colors"
      aria-label={`View ${title} product details`}
    >
      <article className={className}>
        <div className="mb-2">
          <div className="relative aspect-square overflow-hidden bg-gray-200 rounded-md">
            {image ? (
              <Image
                src={image.url}
                alt={image.altText || title}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 45vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105"
                priority={false}
                aria-hidden="true"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gray-200" aria-hidden="true">
                <span className="text-sm text-gray-500">No image</span>
              </div>
            )}
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <p className="text-sm font-medium" aria-label={`Price: ${price}`}>
            {price}
          </p>
        </div>
      </article>
    </Link>
  );
}