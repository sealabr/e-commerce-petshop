import React from 'react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto">
          <span className="text-white text-2xl">🐾</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Fale Conosco</h2>
        <p className="text-gray-600">Entre em contato por email ou telefone:</p>
        <div className="space-y-2">
          <p className="text-gray-700">
            📧
            <a href="mailto:contato@edog.com.br" className="text-blue-600 hover:underline ml-1">
              contato@edog.com.br
            </a>
          </p>
          <p className="text-gray-700">
            📞
            <a href="tel:+553299991133" className="text-blue-600 hover:underline ml-1">
              +55 (32) 99991-1333
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
