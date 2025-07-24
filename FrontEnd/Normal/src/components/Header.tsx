import React, { useState } from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo easy confort.svg" 
              alt="Easy Comfort" 
              className="h-8 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 max-w-md flex-1 mx-8">
            <div className="flex-1 px-6 py-2">
              <input
                type="text"
                placeholder="Où souhaitez-vous aller?"
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-2">
              <input
                type="text"
                placeholder="Dates"
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-2">
              <input
                type="text"
                placeholder="Voyageurs"
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full mr-2 transition-colors duration-200">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              Devenez hôte
            </button>
            <button className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Globe className="w-4 h-4" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow duration-200"
              >
                <Menu className="w-4 h-4 text-gray-700" />
                <User className="w-6 h-6 text-gray-700 bg-gray-500 rounded-full p-1" />
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">S'inscrire</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Se connecter</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Proposer son logement</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aide</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-4">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
          <Search className="w-5 h-5 text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Où souhaitez-vous aller?"
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;