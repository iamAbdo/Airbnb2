import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Villa moderne avec piscine',
    location: 'Alger, Hydra',
    price: 15000,
    rating: 4.8,
    reviews: 24,
    isFavorite: false
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Appartement vue mer',
    location: 'Oran, Ain El Turck',
    price: 8500,
    rating: 4.6,
    reviews: 18,
    isFavorite: true
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Maison traditionnelle',
    location: 'Constantine, Centre-ville',
    price: 6000,
    rating: 4.9,
    reviews: 31,
    isFavorite: false
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Studio moderne',
    location: 'Annaba, Seraidi',
    price: 4500,
    rating: 4.5,
    reviews: 12,
    isFavorite: false
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Villa avec jardin',
    location: 'Tlemcen, Mansourah',
    price: 12000,
    rating: 4.7,
    reviews: 28,
    isFavorite: true
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Appartement familial',
    location: 'Sétif, Centre-ville',
    price: 7000,
    rating: 4.4,
    reviews: 15,
    isFavorite: false
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Chalet montagnard',
    location: 'Tikjda, Bouira',
    price: 9000,
    rating: 4.8,
    reviews: 22,
    isFavorite: false
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/1571466/pexels-photo-1571466.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Résidence balnéaire',
    location: 'Jijel, Corniche',
    price: 11000,
    rating: 4.6,
    reviews: 19,
    isFavorite: true
  }
];

const PropertyGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
          Voir plus de logements
        </button>
      </div>
    </section>
  );
};

export default PropertyGrid;