import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export default function NavigationCard({ title, description, icon: Icon, to }: NavigationCardProps) {
  return (
    <Link
      to={to}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm block"
    >
      <div className="flex flex-col items-center gap-4">
        <Icon size={48} className="text-purple-600" />
        <h2 className="text-2xl font-semibold text-purple-800">{title}</h2>
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </Link>
  );
}