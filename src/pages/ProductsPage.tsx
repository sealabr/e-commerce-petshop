import React from 'react';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CategoryFilter } from '../components/CategoryFilter';

interface ProductsPageProps {
  products: Product[];
  onProductClick: (product: Product) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function ProductsPage({ 
  products, 
  onProductClick, 
  selectedCategory, 
  onCategoryChange 
}: ProductsPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nossos Produtos</h1>
        <p className="text-gray-600">Encontre tudo o que seu pet precisa</p>
      </div>

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
        </div>
      )}
    </div>
  );
}