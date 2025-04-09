# Headless Shopify Product Listing Page

This is a headless e-commerce implementation built with Next.js and TypeScript that connects to a Shopify store.

## Features

- Connect to Shopify Storefront API
- Display products with stock available
- Sort products by price (low to high or high to low)
- Load 12 products at a time with a "Load More" button
- Responsive design matching the provided mockup

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file with your Shopify credentials:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=xxxxx
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=xxxxx
   NEXT_PUBLIC_SHOPIFY_API_VERSION=2025-04
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000/products](http://localhost:3000/products) to view the product listing page

## Implementation Notes

- The application uses the Shopify Storefront API to fetch products
- Only products with available stock are displayed
- The design follows the provided mockup
- Features like tags (Sale, Exclusive), color variations, basket icons, navigation, and filters were not implemented as per requirements

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Shopify Storefront API

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
