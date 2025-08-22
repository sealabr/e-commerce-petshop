import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ExchangePageProps {
  onBack: () => void;
}

export function ExchangePage({ onBack }: ExchangePageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </button>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Instruções de Troca</h1>
      <p className="text-gray-600 mb-4">
        Se você precisa trocar um produto, siga os passos abaixo para que possamos ajudar da melhor forma:
      </p>
      <ol className="list-decimal list-inside space-y-2 text-gray-600">
        <li>Entre em contato com nosso atendimento informando o número do pedido e o motivo da troca.</li>
        <li>O produto deve estar em perfeitas condições e na embalagem original.</li>
        <li>Envie o produto para o endereço informado pelo atendimento.</li>
        <li>Assim que recebermos, faremos a análise e entraremos em contato com as próximas etapas.</li>
      </ol>
    </div>
  );
}

