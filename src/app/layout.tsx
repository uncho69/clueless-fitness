import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Cart from "@/components/Cart";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CluelessFitness - Premium Athletic Wear",
  description: "Discover premium athletic wear and fitness apparel designed for peak performance. Shop our exclusive collection of t-shirts, hoodies, and more.",
  keywords: "fitness apparel, athletic wear, t-shirts, hoodies, workout clothes, CluelessFitness",
  openGraph: {
    title: "CluelessFitness - Premium Athletic Wear",
    description: "Discover premium athletic wear and fitness apparel designed for peak performance.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "CluelessFitness",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900`}>
        <CartProvider>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
