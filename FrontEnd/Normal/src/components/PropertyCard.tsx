import React from 'react';
import { Star, Heart } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  isFavorite?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  isFavorite = false
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200">
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-xs font-medium text-gray-800">Disponible</span>
        </div>
      </div>
      
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 truncate">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm">{location}</p>
        
        <div className="flex items-baseline space-x-1 pt-1">
          <span className="font-semibold text-gray-900">{price.toLocaleString()} DA</span>
          <span className="text-gray-600 text-sm">/ nuit</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;