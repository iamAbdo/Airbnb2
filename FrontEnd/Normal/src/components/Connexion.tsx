import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

const texts = {
  fr: {
    title: 'Se connecter',
    email: 'Adresse e-mail',
    password: 'Mot de passe',
    fillAll: 'Veuillez remplir tous les champs.',
    login: 'Connexion',
    emailPlaceholder: 'Adresse e-mail',
    passwordPlaceholder: 'Mot de passe',
    fakeAlert: 'Connexion simulée !',
  },
  ar: {
    title: 'تسجيل الدخول',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    fillAll: 'يرجى ملء جميع الحقول.',
    login: 'دخول',
    emailPlaceholder: 'البريد الإلكتروني',
    passwordPlaceholder: 'كلمة المرور',
    fakeAlert: 'تمت المحاكاة!',
  },
};

const Connexion = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError(texts[language].fillAll);
      return;
    }
    setError('');
    alert(texts[language].fakeAlert);
  };

  const isArabic = language === 'ar';

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-yellow-300">{texts[language].title}</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">{texts[language].email}</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-yellow-300 dark:placeholder-gray-400"
                placeholder={texts[language].emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="sr-only">{texts[language].password}</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm dark:bg-gray-700 dark:text-yellow-300 dark:placeholder-gray-400"
                placeholder={texts[language].passwordPlaceholder}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mt-2 dark:text-yellow-300">{error}</div>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-yellow-300 dark:text-gray-900 dark:hover:bg-yellow-400"
            >
              {texts[language].login}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion; 