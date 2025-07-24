import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FilterSection } from "./components/FilterSection";
import { PropertyGrid } from "./components/PropertyGrid";
import { Footer } from "./components/Footer";

// Mock data for Algerian properties
const mockProperties = [
  {
    id: 1,
    title: "Beautiful Apartment in Algiers Center",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    price: 8500,
    rating: 4.8,
    reviews: 24,
    location: "Algiers, Algeria",
    type: "Apartment",
    beds: 2,
    baths: 1,
    superhost: true,
  },
  {
    id: 2,
    title: "Luxury Villa with Sea View in Oran",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=300&fit=crop",
    price: 15000,
    rating: 4.9,
    reviews: 18,
    location: "Oran, Algeria",
    type: "Villa",
    beds: 4,
    baths: 3,
    superhost: true,
  },
  {
    id: 3,
    title: "Cozy Studio in Constantine Old Town",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    price: 5500,
    rating: 4.6,
    reviews: 31,
    location: "Constantine, Algeria",
    type: "Studio",
    beds: 1,
    baths: 1,
    superhost: false,
  },
  {
    id: 4,
    title: "Modern House in Annaba",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    price: 12000,
    rating: 4.7,
    reviews: 15,
    location: "Annaba, Algeria",
    type: "House",
    beds: 3,
    baths: 2,
    superhost: false,
  },
  {
    id: 5,
    title: "Traditional Riad in Tlemcen",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    price: 9500,
    rating: 4.8,
    reviews: 22,
    location: "Tlemcen, Algeria",
    type: "Riad",
    beds: 3,
    baths: 2,
    superhost: true,
  },
  {
    id: 6,
    title: "Beachfront Apartment in Bejaia",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    price: 11000,
    rating: 4.9,
    reviews: 28,
    location: "Bejaia, Algeria",
    type: "Apartment",
    beds: 2,
    baths: 2,
    superhost: true,
  },
];

export default function App() {
  const [filteredProperties, setFilteredProperties] =
    useState(mockProperties);
  const [filters, setFilters] = useState({
    priceRange: [0, 20000],
    propertyType: "",
    beds: 0,
    superhost: false,
  });

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);

    const filtered = mockProperties.filter((property) => {
      const matchesPrice =
        property.price >= newFilters.priceRange[0] &&
        property.price <= newFilters.priceRange[1];
      const matchesType =
        !newFilters.propertyType ||
        newFilters.propertyType === "" ||
        property.type === newFilters.propertyType;
      const matchesBeds =
        newFilters.beds === 0 ||
        property.beds >= newFilters.beds;
      const matchesSuperhost =
        !newFilters.superhost || property.superhost;

      return (
        matchesPrice &&
        matchesType &&
        matchesBeds &&
        matchesSuperhost
      );
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <FilterSection
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="lg:w-3/4">
            <PropertyGrid properties={filteredProperties} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}