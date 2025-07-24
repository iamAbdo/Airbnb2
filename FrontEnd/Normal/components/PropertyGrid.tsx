import { PropertyCard } from './PropertyCard';

interface Property {
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
}

interface PropertyGridProps {
  properties: Property[];
}

export function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2>Plus de {properties.length} logements</h2>
        <div className="text-sm text-muted-foreground">
          Triés par pertinence
        </div>
      </div>
      
      {properties.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun logement ne correspond à vos critères.</p>
          <p className="text-sm text-muted-foreground mt-2">Essayez d'ajuster vos filtres.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}