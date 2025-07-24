import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import PropertyGrid from './components/PropertyGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import Connexion from './components/Connexion.tsx';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import MapView from './components/MapView';
import { initialProperties } from './components/PropertyGrid';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMap, setShowMap] = useState(false);
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={
              <LanguageProviderContent
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                showMap={showMap}
                setShowMap={setShowMap}
              />
            } />
            <Route path="/cnx" element={<Connexion />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

function LanguageProviderContent({ activeCategory, setActiveCategory, showMap, setShowMap }: any) {
  const { language } = useLanguage();
  return (
    <>
      <Hero onStart={() => setShowMap(true)} />
      <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <PropertyGrid activeCategory={activeCategory} />
      <Features />
      <Footer />
      {showMap && (
        <MapView
          properties={initialProperties}
          language={language}
          onClose={() => setShowMap(false)}
        />
      )}
    </>
  );
}

export default App;