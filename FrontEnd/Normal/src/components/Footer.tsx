import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const texts = {
  fr: {
    companyDesc: "Découvrez l'Algérie autrement avec Easy Comfort. Des logements uniques pour des séjours inoubliables.",
    quickLinks: 'Liens rapides',
    about: 'À propos',
    howItWorks: 'Comment ça marche',
    becomeHost: 'Devenir hôte',
    help: 'Aide',
    terms: "Conditions d'utilisation",
    destinations: 'Destinations populaires',
    cities: ['Alger', 'Oran', 'Constantine', 'Annaba', 'Tlemcen'],
    contact: 'Contact',
    address: 'Alger, Algérie',
    phone: '+213 XX XX XX XX',
    email: 'contact@easycomfort.dz',
    copyright: '© 2024 Easy Comfort. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    legal: 'Mentions légales',
  },
  ar: {
    companyDesc: 'اكتشف الجزائر بطريقة مختلفة مع Easy Comfort. إقامات فريدة لإقامات لا تُنسى.',
    quickLinks: 'روابط سريعة',
    about: 'حول',
    howItWorks: 'كيف يعمل',
    becomeHost: 'كن مضيفًا',
    help: 'مساعدة',
    terms: 'شروط الاستخدام',
    destinations: 'وجهات مشهورة',
    cities: ['الجزائر', 'وهران', 'قسنطينة', 'عنابة', 'تلمسان'],
    contact: 'اتصال',
    address: 'الجزائر، الجزائر',
    phone: '+213 XX XX XX XX',
    email: 'contact@easycomfort.dz',
    copyright: '© 2024 Easy Comfort. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    legal: 'إشعارات قانونية',
  }
};

const Footer = () => {
  const { language } = useLanguage();
  const t = texts[language];
  const isArabic = language === 'ar';
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 dark:text-gray-200" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/logo easy confort.svg" 
              alt="Easy Comfort" 
              className="h-8 w-auto filter brightness-0 invert dark:invert-0"
            />
            <p className="text-gray-300 leading-relaxed dark:text-gray-400">
              {t.companyDesc}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 dark:text-yellow-300 dark:hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 dark:text-yellow-300 dark:hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 dark:text-yellow-300 dark:hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-yellow-300">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{t.about}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{t.howItWorks}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{t.becomeHost}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{t.help}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{t.terms}</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-yellow-300">{t.destinations}</h3>
            <ul className="space-y-2">
              {t.cities.map((city, idx) => (
                <li key={city}><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">{city}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-yellow-300">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500 dark:text-yellow-300" />
                <span className="text-gray-300 dark:text-gray-400">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 dark:text-yellow-300" />
                <span className="text-gray-300 dark:text-gray-400">{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 dark:text-yellow-300" />
                <span className="text-gray-300 dark:text-gray-400">{t.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center dark:border-gray-700">
          <p className="text-gray-400 text-sm dark:text-gray-500">
            {t.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">
              {t.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 dark:text-gray-400 dark:hover:text-yellow-300">
              {t.legal}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;