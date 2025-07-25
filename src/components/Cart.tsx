'use client';

import { Fragment, useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag, Loader2 } from 'lucide-react';

export default function Cart() {
  const { state, removeItem, updateQuantity, closeCart, clearCart, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (state.items.length === 0) return;

    setIsCheckingOut(true);

    try {
      // Generate order reference
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 8).toUpperCase();
      const orderReference = `CF-${timestamp}-${random}`;

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Clear cart first
      clearCart();
      closeCart();

      // Show success message with order details
      alert(`🎉 Order ${orderReference} received!\n\nTotal: £${getTotalPrice().toFixed(2)}\n\nWe'll contact you soon to complete the order and arrange delivery.\n\nThank you for choosing CluelessFitness! 💪`);

    } catch (error) {
      console.error('Checkout error:', error);
      alert('❌ Error processing checkout. Please try again or contact support.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeCart} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-2">Add some motivational gear to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex space-x-4 p-4 border rounded-lg">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.product.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.size.code} • {item.color.name}
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      £{item.product.price.toFixed(2)}
                    </p>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                        disabled={isCheckingOut}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                        disabled={isCheckingOut}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 text-xs"
                        disabled={isCheckingOut}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold">£{getTotalPrice().toFixed(2)}</span>
            </div>
            
            <div className="text-xs text-gray-500 text-center">
              Order processing • Free shipping over £50 • UK delivery
            </div>
            
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-colors ${
                isCheckingOut
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {isCheckingOut ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing Order...</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Complete Order</span>
                </>
              )}
            </button>
            
            {!isCheckingOut && (
              <button
                onClick={clearCart}
                className="w-full text-gray-500 py-2 text-sm hover:text-gray-700 transition-colors"
              >
                Clear Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 