import Link from "next/link"
import Image from "next/image"
import { Button } from "@shop/components/ui/button"

export const HeroModule = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="relative h-[70vh] w-full">
        <Image
          src="/images/banner.jpg"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
        <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center space-y-6 text-center text-white">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Elevate Your Style with Modern Essentials
          </h1>
          <p className="max-w-xl text-lg md:text-xl">
            Discover our latest collection of premium quality products that redefine comfort and style.
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}