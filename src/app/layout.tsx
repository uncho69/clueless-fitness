import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import Cart from "@/components/Cart";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CluelessFitness - No Excuses. Just Results.",
  description: "Gear for those who refuse to quit. When others make excuses, you make progress. Motivational athletic wear that fuels your grind and reminds you that average is not an option.",
  keywords: ["fitness apparel", "motivational clothing", "athletic wear", "workout gear", "gym clothing", "no excuses", "relentless mindset", "CluelessFitness"],
  authors: [{ name: "CluelessFitness" }],
  creator: "CluelessFitness",
  publisher: "CluelessFitness",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://clueless-fitness-5fhs.vercel.app",
    siteName: "CluelessFitness",
    title: "CluelessFitness - No Excuses. Just Results.",
    description: "Gear for those who refuse to quit. When others make excuses, you make progress. Wear your dedication, fuel your grind.",
    images: [
      {
        url: "/teefront2.jpeg",
        width: 1200,
        height: 630,
        alt: "CluelessFitness - Motivational Athletic Wear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CluelessFitness - No Excuses. Just Results.",
    description: "Gear for those who refuse to quit. When others make excuses, you make progress. Wear your dedication, fuel your grind.",
    images: ["/teefront2.jpeg"],
  },
  metadataBase: new URL("https://clueless-fitness-5fhs.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
