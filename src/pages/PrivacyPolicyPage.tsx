import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4 text-gray-900">Política de Privacidade</h1>

      <div className="space-y-4 text-gray-700">
        <p>
          Na PetShop, a sua privacidade é muito importante para nós. As informações
          coletadas são utilizadas exclusivamente para melhorar sua experiência de
          compra e garantir o melhor atendimento possível.
        </p>
        <p>
          Não compartilhamos seus dados pessoais com terceiros sem o seu
          consentimento. Utilizamos medidas de segurança para proteger suas
          informações e você pode solicitar a remoção de seus dados a qualquer
          momento.
        </p>
        <p>
          Ao utilizar nossa loja, você concorda com a coleta e o uso das
          informações conforme descrito nesta política.
        </p>
      </div>
    </div>
  );
}
