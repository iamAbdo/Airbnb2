import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import PropertyGrid from './components/PropertyGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import Connexion from './components/Connexion.tsx';
import { LanguageProvider } from './components/LanguageContext';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CategoryFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <PropertyGrid activeCategory={activeCategory} />
                <Features />
                <Footer />
              </>
            } />
            <Route path="/cnx" element={<Connexion />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;