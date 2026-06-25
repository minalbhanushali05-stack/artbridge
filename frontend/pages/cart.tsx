'use client';

import { useMemo } from 'react';
import Layout from '@/components/Layout';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function Cart() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const { subtotal, tax, shipping, insurance, total } = useMemo(() => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.18; // 18% GST
    const shipping = 100;
    const insurance = (subtotal + shipping) * 0.02;
    const total = subtotal + tax + shipping + insurance;
    return { subtotal, tax, shipping, insurance, total };
  }, [items]);

  if (items.length === 0) {
    return (
      <Layout title="Shopping Cart - ArtBridge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <Link href="/products" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700">
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Shopping Cart - ArtBridge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.product_id} className="bg-white p-6 rounded-lg shadow mb-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Product {item.product_id.slice(0, 8)}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateQuantity(item.product_id, Math.max(1, item.quantity - 1))}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                    className="px-2 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.product_id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (18%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance (2%)</span>
                <span>₹{insurance.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 mb-2">
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full border border-red-600 text-red-600 py-2 rounded hover:bg-red-50"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
