import React, { useState } from 'react';
import { Home, Building, TreePine, Waves, Mountain, Castle, Tent, Car } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Tout', icon: Home },
  { id: 'apartments', name: 'Appartements', icon: Building },
  { id: 'villas', name: 'Villas', icon: Castle },
  { id: 'nature', name: 'Nature', icon: TreePine },
  { id: 'beach', name: 'Plage', icon: Waves },
  { id: 'mountain', name: 'Montagne', icon: Mountain },
  { id: 'camping', name: 'Camping', icon: Tent },
  { id: 'transport', name: 'Transport', icon: Car },
];

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="border-b border-gray-200 bg-white sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-8 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center space-y-2 min-w-max px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium whitespace-nowrap">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;