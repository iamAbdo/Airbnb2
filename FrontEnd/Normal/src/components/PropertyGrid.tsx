import React from 'react';
import PropertyCard from './PropertyCard';
import { useLanguage } from './LanguageContext';

export const initialProperties = [
  {
    id: '1',
    image: './Et pourquoi pas du vert dans la chambre_.jpg',
    title: { fr: 'Appartement familial', ar: 'شقة عائلية', en: 'Family Apartment' },
    location: { fr: 'Sétif, Centre-ville', ar: 'سطيف، وسط المدينة', en: 'Setif, Downtown' },
    price: 7000,
    rating: 4.4,
    reviews: 15,
    isFavorite: false,
    type: { fr: 'Nature', ar: 'طبيعة', en: 'Nature' },
    coordinates: { lat: 36.1911, lng: 5.4137 }, // Sétif
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Appartement vue mer', ar: 'شقة بإطلالة على البحر', en: 'Sea View Apartment' },
    location: { fr: 'Oran, Ain El Turck', ar: 'وهران، عين الترك', en: 'Oran, Ain El Turck' },
    price: 8500,
    rating: 4.6,
    reviews: 18,
    isFavorite: true,
    type: { fr: 'Appartement', ar: 'شقة', en: 'Apartment' },
    coordinates: { lat: 35.7436, lng: -0.7667 }, // Oran
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Maison traditionnelle', ar: 'منزل تقليدي', en: 'Traditional House' },
    location: { fr: 'Constantine, Centre-ville', ar: 'قسنطينة، وسط المدينة', en: 'Constantine, Downtown' },
    price: 6000,
    rating: 4.9,
    reviews: 31,
    isFavorite: false,
    type: { fr: 'Villa', ar: 'فيلا', en: 'Villa' },
    coordinates: { lat: 36.3650, lng: 6.6147 }, // Constantine
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Studio moderne', ar: 'استوديو حديث', en: 'Modern Studio' },
    location: { fr: 'Annaba, Seraidi', ar: 'عنابة، سرايدي', en: 'Annaba, Seraidi' },
    price: 4500,
    rating: 4.5,
    reviews: 12,
    isFavorite: false,
    type: { fr: 'Appartement', ar: 'شقة', en: 'Apartment' },
    coordinates: { lat: 36.9040, lng: 7.7667 }, // Annaba
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Villa avec jardin', ar: 'فيلا مع حديقة', en: 'Villa with Garden' },
    location: { fr: 'Tlemcen, Mansourah', ar: 'تلمسان، منصورة', en: 'Tlemcen, Mansourah' },
    price: 12000,
    rating: 4.7,
    reviews: 28,
    isFavorite: true,
    type: { fr: 'Montagne', ar: 'جبل', en: 'Mountain' },
    coordinates: { lat: 34.8828, lng: -1.3180 }, // Tlemcen
  },
  {
    id: '6',
    image: './Relaxing Japandi Bedroom Designs - Edward George.jpg',
    title: { fr: 'Chalet montagnard', ar: 'شاليه جبلي', en: 'Mountain Chalet' },
    location: { fr: 'Tikjda, Bouira', ar: 'تيكجدة، البويرة', en: 'Tikjda, Bouira' },
    price: 9000,
    rating: 4.8,
    reviews: 22,
    isFavorite: false,
    type: { fr: 'Plage', ar: 'شاطئ', en: 'Beach' },
    coordinates: { lat: 36.4642, lng: 4.1710 }, // Tikjda
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: { fr: 'Résidence balnéaire', ar: 'إقامة شاطئية', en: 'Beach Resort' },
    location: { fr: 'Jijel, Corniche', ar: 'جيجل، الكورنيش', en: 'Jijel, Corniche' },
    price: 11000,
    rating: 4.6,
    reviews: 19,
    isFavorite: true,
    type: { fr: 'Camping', ar: 'تخييم', en: 'Camping' },
    coordinates: { lat: 36.8216, lng: 5.7663 }, // Jijel
  },
];

interface PropertyGridProps {
  activeCategory: string;
}

const categoryTypeMap: Record<string, { fr: string; ar: string; en: string }[]> = {
  all: [],
  apartments: [{ fr: 'Appartement', ar: 'شقة', en: 'Apartment' }],
  villas: [{ fr: 'Villa', ar: 'فيلا', en: 'Villa' }],
  nature: [{ fr: 'Nature', ar: 'طبيعة', en: 'Nature' }],
  beach: [{ fr: 'Plage', ar: 'شاطئ', en: 'Beach' }],
  mountain: [{ fr: 'Montagne', ar: 'جبل', en: 'Mountain' }],
  camping: [{ fr: 'Camping', ar: 'تخييم', en: 'Camping' }],
};

const texts = {
  fr: {
    seeMore: 'Voir plus de logements',
  },
  ar: {
    seeMore: 'عرض المزيد من الإقامات',
  },
  en: {
    seeMore: 'See more properties',
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-900" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...{
            ...property,
            title: property.title[language] || property.title.fr || property.title.ar,
            location: property.location[language] || property.location.fr || property.location.ar,
            type: property.type[language] || property.type.fr || property.type.ar,
            onToggleFavorite: () => toggleFavorite(property.id),
          }} />
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-400">
          {texts[language].seeMore}
        </button>
      </div>
    </section>
  );
};

export default PropertyGrid;