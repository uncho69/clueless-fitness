'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ProductSize, ProductColor } from "@/types/product";
import { useCart } from "@/lib/cart-context";

// NO DAYS OFF Product data
const noDaysOffProduct = {
  id: "no-days-off",
  name: "NO DAYS OFF",
  description: "The ultimate motivational statement for those who never quit. This premium tee embodies the relentless spirit of pushing boundaries and crushing goals. When everyone else rests, you grind. When others make excuses, you make progress. Wear your dedication with pride and let the world know that your commitment never wavers.",
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
};

export default function NoDaysOffPage() {
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(noDaysOffProduct.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const { addItem, openCart } = useCart();

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    setIsAddingToCart(true);
    
    try {
      // Add item to cart
      addItem(noDaysOffProduct, selectedSize, selectedColor, quantity);
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Open cart to show the added item
      openCart();
      
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Error adding to cart. Please try again.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/shop" 
              className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                  <Image
                    src={noDaysOffProduct.images[selectedImageIndex]}
                    alt={`${noDaysOffProduct.name} - View ${selectedImageIndex + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Thumbnail images */}
                <div className="grid grid-cols-3 gap-4">
                  {noDaysOffProduct.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`aspect-square bg-gray-50 rounded-lg border-2 cursor-pointer overflow-hidden transition-all ${
                        selectedImageIndex === index 
                          ? 'border-black ring-2 ring-black ring-offset-2' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={image}
                        alt={`${noDaysOffProduct.name} - Thumbnail ${index + 1}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {noDaysOffProduct.name}
                  </h1>
                  <p className="text-2xl font-bold text-black mb-4">
                    £{noDaysOffProduct.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {noDaysOffProduct.description}
                  </p>
                </div>

                {/* Motivational Quote */}
                <div className="bg-black text-white p-6 rounded-lg">
                  <p className="text-lg font-semibold text-center italic">
                    "Success isn't given. It's earned in the gym, on the field, in every choice you make. NO DAYS OFF."
                  </p>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Color: {selectedColor.name}
                  </h3>
                  <div className="flex space-x-3">
                    {noDaysOffProduct.colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${
                          selectedColor.id === color.id
                            ? 'border-black scale-110'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Size</h3>
                  <div className="grid grid-cols-5 gap-3">
                    {noDaysOffProduct.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`py-3 px-4 border rounded-lg font-medium transition-all ${
                          selectedSize?.id === size.id
                            ? 'border-black bg-black text-white'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {size.code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Quantity</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 border border-gray-300 rounded-lg hover:border-gray-400"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 border border-gray-300 rounded-lg hover:border-gray-400"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAddingToCart || !selectedSize}
                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all ${
                      isAddingToCart || !selectedSize
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>
                      {isAddingToCart 
                        ? 'Adding to Cart...' 
                        : !selectedSize 
                        ? 'Select a Size' 
                        : 'Add to Cart'
                      }
                    </span>
                  </button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    Free shipping on orders over £50. Powered by Gelato for worldwide delivery.
                  </p>
                </div>

                {/* Product Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Product Details</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Premium cotton blend fabric</li>
                    <li>• Comfortable regular fit</li>
                    <li>• Machine washable</li>
                    <li>• Bold motivational design</li>
                    <li>• Print-on-demand via Gelato</li>
                    <li>• Sustainable production</li>
                    <li>• Perfect for gym, casual wear, or motivation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 