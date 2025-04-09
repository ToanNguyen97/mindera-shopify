import { Connection, Image } from "../types/shopify";

/**
 * Formats a price amount to a currency string
 */
export function formatPrice(
  amount: string | number,
  currencyCode = 'USD',
  locale = 'en-US'
): string {
  const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
  }).format(numericAmount);
}

/**
 * Formats a date string to a localized date
 */
export function formatDate(
  dateString: string,
  locale = 'en-US',
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * Truncates text to a specific length and adds an ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Converts a string to a slug format
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

/**
 * Gets the first image from a product's images array
 */
export function getProductImage(
  images: Connection<Image> | null
): Image | null {
  if (!images || !images.edges || images.edges.length === 0) {
    return null;
  }

  const image = images.edges[0].node;

  return {
    url: image.url,
    altText: image.altText || '',
    width: image.width,
    height: image.height,
  };
}