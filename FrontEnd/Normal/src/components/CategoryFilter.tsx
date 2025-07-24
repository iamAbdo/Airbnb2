import React from 'react';
import { Home, Building, TreePine, Waves, Mountain, Castle, Tent, Car } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const categories = [
  { id: 'all', name: { fr: 'Tout', ar: 'الكل', en: 'All' }, icon: Home },
  { id: 'apartments', name: { fr: 'Appartements', ar: 'شقق', en: 'Apartments' }, icon: Building },
  { id: 'villas', name: { fr: 'Villas', ar: 'فيلات', en: 'Villas' }, icon: Castle },
  { id: 'nature', name: { fr: 'Nature', ar: 'طبيعة', en: 'Nature' }, icon: TreePine },
  { id: 'beach', name: { fr: 'Plage', ar: 'شاطئ', en: 'Beach' }, icon: Waves },
  { id: 'mountain', name: { fr: 'Montagne', ar: 'جبل', en: 'Mountain' }, icon: Mountain },
  { id: 'camping', name: { fr: 'Camping', ar: 'تخييم', en: 'Camping' }, icon: Tent },
];

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  return (
    <div className="border-b border-gray-200 bg-white sticky top-16 z-40 dark:bg-gray-900 dark:border-gray-700" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 py-4  overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center space-y-2 min-w-max px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'text-red-500 border-b-2 border-red-500 dark:text-yellow-300 dark:border-yellow-300'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-yellow-300 dark:hover:bg-gray-800'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium whitespace-nowrap">{category.name[language]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;