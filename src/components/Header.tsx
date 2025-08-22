import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function Header({ currentPage, onNavigate, searchTerm, onSearchChange }: HeaderProps) {
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    onNavigate('home');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐾</span>
            </div>
            <span className="text-xl font-bold text-gray-900">PetShop</span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onNavigate('products')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'products' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Produtos
            </button>

            <button className="text-gray-700 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>

            <button 
              onClick={() => onNavigate('cart')}
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* User Menu */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium">{user.name}</span>
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sair
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => onNavigate('login')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Entrar</span>
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={() => {
                onNavigate('products');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium ${
                currentPage === 'products'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Produtos
            </button>

            <button
              onClick={() => {
                onNavigate('cart');
                setIsMenuOpen(false);
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              Carrinho ({getTotalItems()})
            </button>

            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => {
                  onNavigate('login');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}