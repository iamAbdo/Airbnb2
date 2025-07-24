import { Calendar, Users, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

export function HeroSection() {
  const destinations = [
    { name: "Alger", image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73b0e?w=300&h=200&fit=crop" },
    { name: "Oran", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop" },
    { name: "Constantine", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop" },
    { name: "Annaba", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop" }
  ];

  return (
    <div className="bg-gradient-to-b from-background to-muted/20 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl mb-4 text-foreground">
            Trouvez votre séjour parfait en Algérie
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez des logements uniques et des expériences authentiques à travers toute l'Algérie
          </p>
        </div>

        {/* Search Form */}
        <Card className="max-w-4xl mx-auto p-6 mb-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm mb-2">Destination</label>
              <div className="relative">
                <Input placeholder="Où allez-vous ?" className="bg-input-background" />
              </div>
            </div>
            
            <div className="md:col-span-1">
              <label className="block text-sm mb-2">Arrivée</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Date d'arrivée" className="pl-10 bg-input-background" />
              </div>
            </div>
            
            <div className="md:col-span-1">
              <label className="block text-sm mb-2">Départ</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Date de départ" className="pl-10 bg-input-background" />
              </div>
            </div>
            
            <div className="md:col-span-1 flex flex-col">
              <label className="block text-sm mb-2">Voyageurs</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Voyageurs" className="pl-10 bg-input-background" />
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Featured Destinations */}
        <div>
          <h2 className="text-2xl mb-6 text-center">Destinations populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <Card 
                key={index} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-2 left-2 text-white">
                    <span className="text-sm">{destination.name}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}