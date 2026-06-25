'use client';

import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { productAPI } from '@/lib/api-client';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    search: '',
  });

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const params: any = {};
      if (filters.category) params.category = filters.category;
      if (filters.search) params.search = filters.search;
      const response = await productAPI.listProducts(params);
      setProducts(response.results || response);
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="Shop Art - ArtBridge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Explore Art</h1>

        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={filters.category}
            onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Categories</option>
            <option value="painting">Paintings</option>
            <option value="textile">Textiles</option>
            <option value="pottery">Pottery</option>
            <option value="woodwork">Woodwork</option>
            <option value="metalwork">Metalwork</option>
            <option value="jewelry">Jewelry</option>
            <option value="homedecor">Home Decor</option>
          </select>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-12">No products found</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
