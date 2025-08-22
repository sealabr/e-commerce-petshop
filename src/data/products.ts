import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Ração Premium Golden para Cães Adultos 15kg',
    price: 159.90,
    originalPrice: 189.90,
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'racao',
    brand: 'Golden',
    description: 'Ração super premium para cães adultos de porte médio e grande. Fórmula balanceada com proteínas de alta qualidade.',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    tags: ['premium', 'adulto', 'grande porte']
  },
  {
    id: '2',
    name: 'Brinquedo Kong Classic para Cães',
    price: 45.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'brinquedos',
    brand: 'Kong',
    description: 'Brinquedo interativo resistente, ideal para cães que gostam de mastigar. Pode ser recheado com petiscos.',
    rating: 4.9,
    reviews: 189,
    inStock: true,
    tags: ['resistente', 'interativo']
  },
  {
    id: '3',
    name: 'Coleira Antipulgas para Cães e Gatos',
    price: 29.90,
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'acessorios',
    brand: 'FleaAway',
    description: 'Coleira antipulgas de longa duração, proteção por até 8 meses. Resistente à água.',
    rating: 4.5,
    reviews: 156,
    inStock: true,
    tags: ['antipulgas', 'proteção']
  },
  {
    id: '4',
    name: 'Ração Whiskas Sachê para Gatos Filhotes',
    price: 2.50,
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'racao',
    brand: 'Whiskas',
    description: 'Alimento úmido completo para gatinhos de 2 a 12 meses. Sabor frango ao molho.',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    tags: ['filhote', 'úmida', 'frango']
  },
  {
    id: '5',
    name: 'Caixa de Transporte para Pets',
    price: 89.90,
    originalPrice: 119.90,
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'acessorios',
    brand: 'PetCarrier',
    description: 'Caixa de transporte resistente e segura para cães e gatos até 8kg. Ideal para viagens.',
    rating: 4.7,
    reviews: 134,
    inStock: true,
    tags: ['transporte', 'viagem', 'segura']
  },
  {
    id: '6',
    name: 'Arranhador Torre para Gatos',
    price: 199.90,
    image: 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'brinquedos',
    brand: 'CatTower',
    description: 'Arranhador em formato de torre com 3 andares, ideal para gatos brincarem e afiarem as unhas.',
    rating: 4.8,
    reviews: 67,
    inStock: true,
    tags: ['arranhador', 'torre', 'exercício']
  },
  {
    id: '7',
    name: 'Shampoo Antipulgas para Cães',
    price: 24.90,
    image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'higiene',
    brand: 'CleanPet',
    description: 'Shampoo antipulgas com ação prolongada. Fórmula suave que não resseca a pele.',
    rating: 4.4,
    reviews: 78,
    inStock: false,
    tags: ['antipulgas', 'higiene', 'suave']
  },
  {
    id: '8',
    name: 'Comedouro Automático Programável',
    price: 149.90,
    image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'acessorios',
    brand: 'SmartFeed',
    description: 'Comedouro automático com timer programável. Ideal para manter a rotina alimentar do seu pet.',
    rating: 4.6,
    reviews: 92,
    inStock: true,
    tags: ['automático', 'programável', 'rotina']
  },
  {
    id: '9',
    name: 'Bola Interativa LED para Cães',
    price: 39.90,
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'brinquedos',
    brand: 'PlayLight',
    description: 'Bola com LED colorido que acende ao ser tocada. Estimula o exercício e diversão do seu cão.',
    rating: 4.5,
    reviews: 123,
    inStock: true,
    tags: ['LED', 'interativa', 'exercício']
  },
  {
    id: '10',
    name: 'Casinha de Madeira Premium',
    price: 299.90,
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'acessorios',
    brand: 'WoodHouse',
    description: 'Casinha de madeira tratada, resistente às intempéries. Perfeita para o jardim.',
    rating: 4.9,
    reviews: 45,
    inStock: true,
    tags: ['madeira', 'premium', 'jardim']
  }
];

export const categories = [
  { id: 'racao', name: 'Ração', icon: '🥘' },
  { id: 'brinquedos', name: 'Brinquedos', icon: '🎾' },
  { id: 'acessorios', name: 'Acessórios', icon: '🦴' },
  { id: 'higiene', name: 'Higiene', icon: '🧴' }
];