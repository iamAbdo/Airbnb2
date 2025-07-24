import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logo easy confort.svg" 
              alt="Easy Comfort" 
              className="h-8 w-auto filter brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Découvrez l'Algérie autrement avec Easy Comfort. Des logements uniques pour des séjours inoubliables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">À propos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Comment ça marche</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Devenir hôte</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Aide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Conditions d'utilisation</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations populaires</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Alger</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Oran</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Constantine</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Annaba</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Tlemcen</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Alger, Algérie</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">+213 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">contact@easycomfort.dz</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Easy Comfort. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;