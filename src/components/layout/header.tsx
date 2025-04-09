'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@shop/components/cart/cart-context';
import { CartSheet } from '@shop/components/cart/cart-sheet';
import { ModeToggle } from '@shop/components/mode-toggle';
import { Button } from '@shop/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@shop/components/ui/navigation-menu';
import { cn } from '@shop/lib/utils';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@shop/components/ui/sheet';
import { SearchForm } from '@shop/components/search-form';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { cart } = useCart();
  const totalItems = cart?.totalQuantity || 0;
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-200',
        isScrolled
          ? 'border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'bg-background'
      )}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Shopify Store</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/" ? "bg-accent text-accent-foreground" : ""
                  )}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/collections"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            All Collections
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Browse all of our product collections
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link href="/collections/featured" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Featured</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Our featured collection of products</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/collections/new-arrivals" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">New Arrivals</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">The latest additions to our store</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                    pathname === "/blog" ? "bg-accent text-accent-foreground" : ""
                  )}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Cart */}
          <CartSheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
                <span className="sr-only">Open cart</span>
              </Button>
            </SheetTrigger>
          </CartSheet>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-sm">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold">
                  Shopify Store
                </Link>
                <div className="flex flex-col space-y-3">
                  <Link href="/" onClick={() => setIsOpen(false)} className={cn(
                    "text-base transition-colors hover:text-foreground/80",
                    pathname === "/" ? "text-foreground font-medium" : "text-foreground/60"
                  )}>
                    Home
                  </Link>
                  <Link href="/collections" onClick={() => setIsOpen(false)} className={cn(
                    "text-base transition-colors hover:text-foreground/80",
                    pathname === "/collections" ? "text-foreground font-medium" : "text-foreground/60"
                  )}>
                    Collections
                  </Link>
                  <Link href="/collections/featured" onClick={() => setIsOpen(false)} className="pl-4 text-sm text-foreground/60 transition-colors hover:text-foreground/80">
                    Featured
                  </Link>
                  <Link href="/collections/new-arrivals" onClick={() => setIsOpen(false)} className="pl-4 text-sm text-foreground/60 transition-colors hover:text-foreground/80">
                    New Arrivals
                  </Link>
                  <Link href="/blog" onClick={() => setIsOpen(false)} className={cn(
                    "text-base transition-colors hover:text-foreground/80",
                    pathname === "/blog" ? "text-foreground font-medium" : "text-foreground/60"
                  )}>
                    Blog
                  </Link>
                </div>
                <Button variant="outline" className="flex w-full items-center justify-between"
                        onClick={() => {
                          setIsSearchOpen(true);
                          setIsOpen(false);
                        }}>
                  <span>Search</span>
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Search Dialog */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="fixed inset-x-0 top-4 z-50 mx-auto max-w-2xl p-4 sm:top-20">
            <div className="bg-background p-4 shadow-lg rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Search Products</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <SearchForm onSearch={() => setIsSearchOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}