import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Product } from "@/types/product";

// Mock product data - replace with real data later
const mockProducts: Product[] = [
  {
    id: "no-days-off",
    name: "NO DAYS OFF",
    description: "The ultimate motivational statement for those who never quit. This premium tee embodies the relentless spirit of pushing boundaries and crushing goals.",
    price: 24.99,
    currency: "GBP",
    images: ["/teefront2.jpeg", "/teefront.jpeg", "/teefront3.jpeg"],
    sizes: [
      { id: "xs", name: "Extra Small", code: "XS", inStock: true },
      { id: "s", name: "Small", code: "S", inStock: true },
      { id: "m", name: "Medium", code: "M", inStock: true },
      { id: "l", name: "Large", code: "L", inStock: true },
      { id: "xl", name: "Extra Large", code: "XL", inStock: true },
    ],
    colors: [
      { id: "black", name: "Black", hex: "#000000", inStock: true },
      { id: "white", name: "White", hex: "#FFFFFF", inStock: true },
      { id: "navy", name: "Navy", hex: "#1e3a8a", inStock: true },
    ],
    category: "T-Shirts",
    gelatoProductId: "tshirt-basic",
    inStock: true,
    featured: true,
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Shop Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Gear for those who refuse to quit. When others make excuses, you make progress. Wear your dedication, fuel your grind.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/shop/${product.id}`}>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 group-hover:shadow-lg group-hover:scale-[1.02]">
                      {/* Product Image */}
                      <div className="aspect-square bg-gray-100 overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-black">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        
                        {/* Color Options */}
                        <div className="flex space-x-2 mb-4">
                          {product.colors.slice(0, 3).map((color) => (
                            <div
                              key={color.id}
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{ backgroundColor: color.hex }}
                              title={color.name}
                            />
                          ))}
                          {product.colors.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{product.colors.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-black">
                            £{product.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-green-600 font-medium">
                            In Stock
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Empty State for additional products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {[1, 2].map((i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center border-2 border-dashed border-gray-200">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-400 mb-2">
                    Coming Soon
                  </h3>
                  <p className="text-gray-400 text-sm">
                    More relentless designs dropping soon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Relentless
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get first access to new drops, exclusive motivation, and gear that fuels your grind. No excuses, just results.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 