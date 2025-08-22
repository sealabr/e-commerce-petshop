import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg text-gray-700 ml-2">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-500 line-through ml-3">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold ml-3">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Descrição</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {product.tags && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Características</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {product.inStock ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Quantidade:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </button>
                <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold">Produto esgotado</p>
              <p className="text-red-600 text-sm mt-1">Este produto não está disponível no momento</p>
            </div>
          )}

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 font-semibold">✅ Em estoque</p>
            <p className="text-green-600 text-sm mt-1">Entrega em até 24h para sua região</p>
          </div>
        </div>
      </div>
    </div>
  );
}