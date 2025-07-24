import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Separator } from './ui/separator';

interface FilterSectionProps {
  filters: {
    priceRange: number[];
    propertyType: string;
    beds: number;
    superhost: boolean;
  };
  onFilterChange: (filters: any) => void;
}

export function FilterSection({ filters, onFilterChange }: FilterSectionProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleFilterUpdate = (key: string, value: any) => {
    const newFilters = { ...localFilters, [key]: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: [0, 20000],
      propertyType: '',
      beds: 0,
      superhost: false
    };
    setLocalFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <Card className="p-6 sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3>Filtres</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Effacer tout
        </Button>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="mb-4">Gamme de prix</h4>
        <div className="px-2">
          <Slider
            value={localFilters.priceRange}
            onValueChange={(value) => handleFilterUpdate('priceRange', value)}
            max={20000}
            min={0}
            step={500}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{localFilters.priceRange[0].toLocaleString()} DA</span>
            <span>{localFilters.priceRange[1].toLocaleString()} DA</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Property Type */}
      <div className="mb-6">
        <h4 className="mb-4">Type de logement</h4>
        <Select 
          value={localFilters.propertyType} 
          onValueChange={(value) => handleFilterUpdate('propertyType', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Tous les types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Apartment">Appartement</SelectItem>
            <SelectItem value="Villa">Villa</SelectItem>
            <SelectItem value="House">Maison</SelectItem>
            <SelectItem value="Studio">Studio</SelectItem>
            <SelectItem value="Riad">Riad</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator className="my-6" />

      {/* Bedrooms */}
      <div className="mb-6">
        <h4 className="mb-4">Chambres</h4>
        <div className="grid grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4].map((bed) => (
            <Button
              key={bed}
              variant={localFilters.beds === bed ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterUpdate('beds', bed)}
              className="h-10"
            >
              {bed === 0 ? 'Toutes' : bed === 4 ? '4+' : bed}
            </Button>
          ))}
        </div>
      </div>

      <Separator className="my-6" />

      {/* Superhost */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="superhost"
            checked={localFilters.superhost}
            onCheckedChange={(checked) => handleFilterUpdate('superhost', checked)}
          />
          <label htmlFor="superhost" className="text-sm">
            Superhôte uniquement
          </label>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Hôtes expérimentés et très bien notés
        </p>
      </div>
    </Card>
  );
}