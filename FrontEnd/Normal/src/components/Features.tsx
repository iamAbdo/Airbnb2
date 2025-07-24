import React from 'react';
import { Shield, Clock, Award, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const featuresTexts = {
  fr: {
    sectionTitle: 'Pourquoi choisir Easy Comfort ?',
    sectionSubtitle: 'Nous nous engageons à vous offrir la meilleure expérience de voyage en Algérie',
    features: [
      {
        title: 'Sécurité garantie',
        description: 'Tous nos logements sont vérifiés et nos hôtes certifiés pour votre sécurité.'
      },
      {
        title: 'Réservation instantanée',
        description: 'Réservez en quelques clics et recevez une confirmation immédiate.'
      },
      {
        title: 'Qualité premium',
        description: 'Des logements sélectionnés pour leur qualité et leur confort exceptionnel.'
      },
      {
        title: 'Support 24/7',
        description: "Notre équipe est disponible 24h/24 pour vous accompagner."
      }
    ]
  },
  ar: {
    sectionTitle: 'لماذا تختار Easy Comfort؟',
    sectionSubtitle: 'نحن ملتزمون بتقديم أفضل تجربة سفر في الجزائر',
    features: [
      {
        title: 'ضمان الأمان',
        description: 'جميع إقاماتنا مُحققة ومضيفونا معتمدون لضمان سلامتك.'
      },
      {
        title: 'حجز فوري',
        description: 'احجز في بضع نقرات وتلقَ تأكيدًا فوريًا.'
      },
      {
        title: 'جودة ممتازة',
        description: 'إقامات مختارة لجودتها وراحتها الاستثنائية.'
      },
      {
        title: 'دعم 24/7',
        description: 'فريقنا متاح لمساعدتك على مدار الساعة.'
      }
    ]
  }
};

const icons = [Shield, Clock, Award, HeadphonesIcon];

const Features = () => {
  const { language } = useLanguage();
  const texts = featuresTexts[language];
  const isArabic = language === 'ar';
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {texts.sectionTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            {texts.sectionSubtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {texts.features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
                  <Icon className="w-8 h-8 text-red-500 dark:text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed dark:text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;