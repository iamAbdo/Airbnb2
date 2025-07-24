import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix marker icon issue in leaflet with webpack
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

interface Property {
  id: string;
  title: { fr: string; ar: string; en: string };
  coordinates: { lat: number; lng: number };
}

interface MapViewProps {
  properties: Property[];
  language: 'fr' | 'ar' | 'en';
  onClose?: () => void;
}

const MapView: React.FC<MapViewProps> = ({ properties, language, onClose }) => {
  // Center the map on Algeria
  const center = [28.0339, 1.6596];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <button
          className="absolute top-4 right-4 z-10 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onClose}
        >
          X
        </button>
        <MapContainer center={center} zoom={6} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {properties.map((property) => (
            <Marker key={property.id} position={[property.coordinates.lat, property.coordinates.lng]}>
              <Popup>
                {property.title[language]}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView; 