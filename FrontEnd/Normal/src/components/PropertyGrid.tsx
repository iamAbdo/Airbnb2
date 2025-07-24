import React from 'react';
import PropertyCard from './PropertyCard';
import { useLanguage } from './LanguageContext';

const initialProperties = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Villa moderne avec piscine', ar: 'فيلا حديثة مع مسبح' },
    location: { fr: 'Alger, Hydra', ar: 'الجزائر، حيدرة' },
    price: 15000,
    rating: 4.8,
    reviews: 24,
    isFavorite: false,
    type: { fr: 'Villa', ar: 'فيلا' }
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Appartement vue mer', ar: 'شقة بإطلالة على البحر' },
    location: { fr: 'Oran, Ain El Turck', ar: 'وهران، عين الترك' },
    price: 8500,
    rating: 4.6,
    reviews: 18,
    isFavorite: true,
    type: { fr: 'Appartement', ar: 'شقة' }
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Maison traditionnelle', ar: 'منزل تقليدي' },
    location: { fr: 'Constantine, Centre-ville', ar: 'قسنطينة، وسط المدينة' },
    price: 6000,
    rating: 4.9,
    reviews: 31,
    isFavorite: false,
    type: { fr: 'Villa', ar: 'فيلا' }
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Studio moderne', ar: 'استوديو حديث' },
    location: { fr: 'Annaba, Seraidi', ar: 'عنابة، سرايدي' },
    price: 4500,
    rating: 4.5,
    reviews: 12,
    isFavorite: false,
    type: { fr: 'Appartement', ar: 'شقة' }
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Villa avec jardin', ar: 'فيلا مع حديقة' },
    location: { fr: 'Tlemcen, Mansourah', ar: 'تلمسان، منصورة' },
    price: 12000,
    rating: 4.7,
    reviews: 28,
    isFavorite: true,
    type: { fr: 'Montagne', ar: 'جبل' }
  },
  {
    id: '6',
    image: './Et pourquoi pas du vert dans la chambre_.jpg',
    title: { fr: 'Appartement familial', ar: 'شقة عائلية' },
    location: { fr: 'Sétif, Centre-ville', ar: 'سطيف، وسط المدينة' },
    price: 7000,
    rating: 4.4,
    reviews: 15,
    isFavorite: false,
    type: { fr: 'Nature', ar: 'طبيعة' }
  },
  {
    id: '7',
    image: './Relaxing Japandi Bedroom Designs - Edward George.jpg',
    title: { fr: 'Chalet montagnard', ar: 'شاليه جبلي' },
    location: { fr: 'Tikjda, Bouira', ar: 'تيكجدة، البويرة' },
    price: 9000,
    rating: 4.8,
    reviews: 22,
    isFavorite: false,
    type: { fr: 'Plage', ar: 'شاطئ' }
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Résidence balnéaire', ar: 'إقامة شاطئية' },
    location: { fr: 'Jijel, Corniche', ar: 'جيجل، الكورنيش' },
    price: 11000,
    rating: 4.6,
    reviews: 19,
    isFavorite: true,
    type: { fr: 'Camping', ar: 'تخييم' }
  }
];

interface PropertyGridProps {
  activeCategory: string;
}

const categoryTypeMap: Record<string, { fr: string; ar: string }[]> = {
  all: [],
  apartments: [{ fr: 'Appartement', ar: 'شقة' }],
  villas: [{ fr: 'Villa', ar: 'فيلا' }],
  nature: [{ fr: 'Nature', ar: 'طبيعة' }],
  beach: [{ fr: 'Plage', ar: 'شاطئ' }],
  mountain: [{ fr: 'Montagne', ar: 'جبل' }],
  camping: [{ fr: 'Camping', ar: 'تخييم' }],
};

const texts = {
  fr: {
    seeMore: 'Voir plus de logements',
  },
  ar: {
    seeMore: 'عرض المزيد من الإقامات',
  },
};

const PropertyGrid: React.FC<PropertyGridProps> = ({ activeCategory }) => {
  const { language } = useLanguage();
  const [properties, setProperties] = React.useState(initialProperties);

  const toggleFavorite = (id: string) => {
    setProperties((prev) =>
      prev.map((property) =>
        property.id === id
          ? { ...property, isFavorite: !property.isFavorite }
          : property
      )
    );
  };

  const filteredProperties = React.useMemo(() => {
    if (activeCategory === 'all') return properties;
    const types = categoryTypeMap[activeCategory]?.map((t) => t[language]) || [];
    return properties.filter((property) => types.includes(property.type[language]));
  }, [properties, activeCategory, language]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...{
            ...property,
            title: property.title[language],
            location: property.location[language],
            type: property.type[language],
            onToggleFavorite: () => toggleFavorite(property.id),
          }} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
          {texts[language].seeMore}
        </button>
      </div>
    </section>
  );
};

export default PropertyGrid;