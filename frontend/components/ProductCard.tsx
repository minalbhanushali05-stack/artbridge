'use client';

import { useState } from 'react';
import { productAPI } from '@/lib/api-client';
import { useCartStore } from '@/lib/store';

interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      addItem({
        product_id: product.id,
        quantity: 1,
        price: parseFloat(product.price),
      });
      alert('Added to cart!');
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="aspect-square bg-gray-200 overflow-hidden">
        <img
          src={product.images?.[0] || '/placeholder.jpg'}
          alt={product.title}
          className="w-full h-full object-cover hover:scale-105 transition"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-sm text-gray-500 mb-3">{product.sub_category || product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">₹{product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
          >
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
        {product.qr_code && (
          <a
            href={product.qr_code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 hover:underline mt-2 block"
          >
            View Artist Profile
          </a>
        )}
      </div>
    </div>
  );
}
