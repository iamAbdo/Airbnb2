import React from 'react';
import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sécurité garantie',
    description: 'Tous nos logements sont vérifiés et nos hôtes certifiés pour votre sécurité.'
  },
  {
    icon: Clock,
    title: 'Réservation instantanée',
    description: 'Réservez en quelques clics et recevez une confirmation immédiate.'
  },
  {
    icon: Award,
    title: 'Qualité premium',
    description: 'Des logements sélectionnés pour leur qualité et leur confort exceptionnel.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Support 24/7',
    description: 'Notre équipe est disponible 24h/24 pour vous accompagner.'
  }
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi choisir Easy Comfort ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous nous engageons à vous offrir la meilleure expérience de voyage en Algérie
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;