import { Heart, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
    reviews: number;
    location: string;
    type: string;
    beds: number;
    baths: number;
    superhost: boolean;
  };
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative">
        <img 
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background/90 rounded-full"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {property.superhost && (
          <Badge className="absolute top-2 left-2 bg-background text-foreground">
            SUPERHOST
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">{property.location}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-current text-yellow-400" />
            <span className="text-sm">{property.rating}</span>
            <span className="text-sm text-muted-foreground">({property.reviews})</span>
          </div>
        </div>
        
        <h3 className="mb-2 line-clamp-2">{property.title}</h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>{property.type}</span>
          <span>{property.beds} lit{property.beds > 1 ? 's' : ''} · {property.baths} sdb</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg">{property.price.toLocaleString()} DA</span>
            <span className="text-sm text-muted-foreground"> / nuit</span>
          </div>
        </div>
      </div>
    </Card>
  );
}