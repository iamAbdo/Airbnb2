import React, { useState, useEffect } from 'react';
import { Search, Menu, User, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import Switch from './Switch';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isArabic = language === 'ar';
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Texts for all languages
  const texts = {
    fr: {
      searchPlaceholder: 'Où souhaitez-vous aller?',
      dates: 'Dates',
      guests: 'Voyageurs',
      becomeHost: 'Devenez hôte',
      signup: "S'inscrire",
      login: 'Se connecter',
      offerHome: 'Proposer son logement',
      help: 'Aide',
    },
    ar: {
      searchPlaceholder: 'إلى أين تريد الذهاب؟',
      dates: 'التواريخ',
      guests: 'المسافرون',
      becomeHost: 'كن مضيفًا',
      signup: 'إنشاء حساب',
      login: 'تسجيل الدخول',
      offerHome: 'اعرض منزلك',
      help: 'مساعدة',
    },
    en: {
      searchPlaceholder: 'Where do you want to go?',
      dates: 'Dates',
      guests: 'Guests',
      becomeHost: 'Become a host',
      signup: 'Sign up',
      login: 'Log in',
      offerHome: 'List your property',
      help: 'Help',
    },
  };

  // Hide language selector when menu is opened
  useEffect(() => {
    if (isMenuOpen) setIsLangOpen(false);
  }, [isMenuOpen]);

  // Hide language selector on click outside
  useEffect(() => {
    if (!isLangOpen) return;
    const handleClick = (e: MouseEvent) => {
      const langBtn = document.getElementById('lang-btn');
      const langDropdown = document.getElementById('lang-dropdown');
      if (
        langBtn && langDropdown &&
        !langBtn.contains(e.target as Node) &&
        !langDropdown.contains(e.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isLangOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm${isArabic ? ' rtl' : ''} dark:bg-gray-900 dark:border-gray-700 dark:shadow-md`} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
            <img 
              src="/logo easy confort.svg" 
              alt="Easy Comfort" 
              className="h-12 w-auto"
            />
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 max-w-md flex-1 mx-8">
            <div className="flex-1 px-6 py-2">
              <input
                type="text"
                placeholder={texts[language].searchPlaceholder}
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-2">
              <input
                type="text"
                placeholder={texts[language].dates}
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <div className="border-l border-gray-300 px-6 py-2">
              <input
                type="text"
                placeholder={texts[language].guests}
                className="w-full text-sm text-gray-700 placeholder-gray-500 border-none outline-none bg-transparent"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full mr-2 transition-colors duration-200">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Right Menu */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <div className="flex items-center">
              <Switch checked={darkMode} onChange={() => setDarkMode((prev) => !prev)} />
            </div>
            <button className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              {texts[language].becomeHost}
            </button>
            {/* Language Switcher */}
            <div className="relative">
              <button
                id="lang-btn"
                className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200 flex items-center"
                onClick={() => setIsLangOpen((prev) => !prev)}
                aria-label="Toggle language selector"
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-xs">{language === 'fr' ? 'FR' : language === 'ar' ? 'AR' : 'EN'}</span>
              </button>
              {isLangOpen && (
                <div id="lang-dropdown" className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'fr' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('fr'); setIsLangOpen(false); }}
                  >
                    Français
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'ar' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('ar'); setIsLangOpen(false); }}
                  >
                    العربية
                  </button>
                  <button
                    className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'font-bold' : ''}`}
                    onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => { setIsMenuOpen(!isMenuOpen); setIsLangOpen(false); }}
                className="flex items-center space-x-2 border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow duration-200"
              >
                <Menu className="w-4 h-4 text-gray-700" />
                <User className="w-6 h-6 text-gray-700 bg-gray-500 rounded-full p-1" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{texts[language].signup}</a>
                  <a href="/cnx" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{texts[language].login}</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{texts[language].offerHome}</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{texts[language].help}</a>
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
            placeholder={texts[language].searchPlaceholder}
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;