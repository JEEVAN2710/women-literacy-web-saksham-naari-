import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Landmark, CreditCard, Smartphone, Wallet, CircleDollarSign, ArrowLeft } from 'lucide-react';

const modules = [
  {
    id: 'intro',
    title: 'Introduction to Banking',
    icon: Wallet,
    description: 'Learn basic banking concepts and terminology',
    path: '/arthshakti/intro'
  },
  {
    id: 'account',
    title: 'Bank Account Opening',
    icon: Building2,
    description: 'Step-by-step guide to open your bank account',
    path: '/arthshakti/account'
  },
  {
    id: 'services',
    title: 'Services & Procedures',
    icon: Landmark,
    description: 'Understanding various banking services',
    path: '/arthshakti/services'
  },
  {
    id: 'atm',
    title: 'ATM Usage',
    icon: CreditCard,
    description: 'How to use ATM cards safely',
    path: '/arthshakti/atm'
  },
  {
    id: 'mobile',
    title: 'Mobile Banking & UPI',
    icon: Smartphone,
    description: 'Digital payment methods explained',
    path: '/arthshakti/mobile'
  },
  {
    id: 'schemes',
    title: 'Government Schemes',
    icon: CircleDollarSign,
    description: 'Financial support programs for women',
    path: '/arthshakti/schemes'
  }
];

export default function Arthshakti() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </button>

      <h2 className="text-3xl font-bold text-purple-800 mb-8">Arthshakti</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(({ id, title, icon: Icon, description, path }) => (
          <Link
            key={id}
            to={path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 text-left w-full"
          >
            <Icon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}