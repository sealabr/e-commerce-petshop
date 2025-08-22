import React, { useState, useMemo } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { LoginPage } from './pages/LoginPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ExchangePage } from './pages/ExchangePage';
import { products } from './data/products';
import { Product } from './types';

type Page = 'home' | 'products' | 'product-detail' | 'cart' | 'login' | 'checkout' | 'exchange';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredProducts = products.slice(0, 4);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'product-detail') {
      setSelectedProduct(null);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  const handleBackNavigation = () => {
    if (currentPage === 'product-detail') {
      setCurrentPage('products');
    } else if (currentPage === 'cart' || currentPage === 'login' || currentPage === 'checkout' || currentPage === 'exchange') {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            featuredProducts={featuredProducts}
            onProductClick={handleProductClick}
            onNavigate={handleNavigate}
          />
        );
      case 'products':
        return (
          <ProductsPage
            products={filteredProducts}
            onProductClick={handleProductClick}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        );
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailPage
            product={selectedProduct}
            onBack={handleBackNavigation}
          />
        ) : null;
      case 'cart':
        return (
          <CartPage
            onBack={handleBackNavigation}
            onNavigate={handleNavigate}
          />
        );
      case 'login':
        return <LoginPage onBack={handleBackNavigation} />;
      case 'checkout':
        return (
          <CheckoutPage
            onBack={handleBackNavigation}
            onNavigate={handleNavigate}
          />
        );
      case 'exchange':
        return <ExchangePage onBack={handleBackNavigation} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐾</span>
                </div>
                <span className="text-xl font-bold">PetShop</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tudo para o seu melhor amigo com qualidade e carinho.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Produtos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Ração</li>
                <li>Brinquedos</li>
                <li>Acessórios</li>
                <li>Higiene</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Atendimento</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Central de Ajuda</li>
                <li>Fale Conosco</li>
                <li>
                  <button
                    onClick={() => handleNavigate('exchange')}
                    className="hover:underline"
                  >
                    Política de Trocas
                  </button>
                </li>
                <li>Entrega</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📞 (11) 9999-9999</li>
                <li>📧 contato@petshop.com</li>
                <li>📍 São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 PetShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;