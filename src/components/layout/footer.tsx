import Link from 'next/link';
import { Button } from '@shop/components/ui/button';
import { Separator } from '@shop/components/ui/separator';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Shop</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground">
                All Collections
              </Link>
              <Link href="/collections/featured" className="text-sm text-muted-foreground hover:text-foreground">
                Featured
              </Link>
              <Link href="/collections/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">
                New Arrivals
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-foreground">
                All Products
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Information</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Policies</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/policies/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/policies/refund-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Refund Policy
              </Link>
              <Link href="/policies/shipping-policy" className="text-sm text-muted-foreground hover:text-foreground">
                Shipping Policy
              </Link>
              <Link href="/policies/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shopify Store. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">Powered by</p>
            <a
              href="https://shopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Shopify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}