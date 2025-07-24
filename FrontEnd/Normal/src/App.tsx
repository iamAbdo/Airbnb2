import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import PropertyGrid from './components/PropertyGrid';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryFilter />
      <PropertyGrid />
      <Features />
      <Footer />
    </div>
  );
}

export default App;