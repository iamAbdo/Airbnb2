import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-red-500 to-pink-500 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez l'Algérie
            <span className="block text-3xl md:text-5xl font-light">avec Easy Comfort</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Des logements uniques, des expériences authentiques dans toute l'Algérie
          </p>
          <button className="bg-white text-red-500 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg">
            Commencer à explorer
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-32 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      <div className="absolute top-32 right-64 w-16 h-16 bg-white/10 rounded-full blur-md"></div>
    </section>
  );
};

export default Hero;