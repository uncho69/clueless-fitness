'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems, toggleCart } = useCart();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-black">CluelessFitness</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/shop" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              Shop
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Shopping Bag Icon */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-black transition-colors duration-200"
            >
              <ShoppingBag size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-black transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 