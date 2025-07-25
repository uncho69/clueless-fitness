# CluelessFitness - Athletic Wear Store

A modern, minimal e-commerce store for premium athletic wear, built with Next.js and integrated with Gelato for print-on-demand fulfillment.

## Features

- 🎯 **Modern Design**: Clean, minimal UI built with Tailwind CSS
- 🛒 **E-commerce Ready**: Product pages, shopping cart, and checkout flow
- 🖨️ **Gelato Integration**: Print-on-demand fulfillment for worldwide shipping
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast**: Built with Next.js 15 and App Router
- 🇬🇧 **UK-Based**: Optimized for the UK market with local shipping

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **API**: Axios for HTTP requests
- **Fulfillment**: Gelato API integration

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file with your Gelato API credentials:
   ```
   GELATO_API_KEY=your-gelato-api-key
   GELATO_API_URL=https://api.gelato.com
   NEXT_PUBLIC_SITE_NAME=CluelessFitness
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── orders/        # Order processing API
│   ├── shop/              # Shop pages
│   │   ├── page.tsx       # Shop listing
│   │   └── [productId]/   # Product detail pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # React components
│   ├── Header.tsx        # Site header
│   └── Footer.tsx        # Site footer
├── lib/                  # Utility libraries
│   └── gelato.ts         # Gelato API integration
└── types/                # TypeScript type definitions
    └── product.ts        # Product and order types
```

## Gelato Integration

The store is integrated with Gelato's print-on-demand API to handle:

- Product fulfillment
- Order processing
- Worldwide shipping
- Inventory management

### How It Works

1. Customer places order on your site
2. Order details are sent to Gelato via API
3. Gelato handles printing and shipping
4. Customer receives their order directly from Gelato

## Customization

### Adding Products

1. Update the mock product data in `/src/app/shop/page.tsx`
2. Add your designs to the `/public` folder
3. Configure Gelato product IDs in the product data

### Uploading Your Designs

1. Place your t-shirt designs in the `/public` folder
2. Update the image paths in the product data
3. Ensure designs meet Gelato's specifications

### Styling

The site uses Tailwind CSS with custom components defined in `/src/app/globals.css`:

- `.btn-primary` - Primary call-to-action buttons
- `.btn-secondary` - Secondary buttons
- `.btn-outline` - Outline buttons

## Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   npm i -g vercel
   vercel
   ```

3. **Add environment variables** in your deployment platform

## API Endpoints

- `POST /api/orders` - Create new order with Gelato
- `GET /api/orders?orderReference=...` - Get order status

## Support

For issues related to:
- **Store functionality**: Check this README and project documentation
- **Gelato integration**: Refer to [Gelato API docs](https://docs.gelato.com)
- **Next.js**: Check [Next.js documentation](https://nextjs.org/docs)

## License

This project is private and proprietary to CluelessFitness.

---

**CluelessFitness** - Elevate Your Fitness Journey
