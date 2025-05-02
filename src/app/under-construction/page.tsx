'use client';

import MainLayout from '../layouts/MainLayout';
import { useRouter } from 'next/navigation';
import { translations, Language, Translation } from '../i18n';
import { useState } from 'react';

const UnderConstructionPage = () => {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('es');
  const t: Translation = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Botón de cambio de idioma */}
          <div className="flex justify-end mb-4">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </div>

          {/* Contenido de la página */}
          <div className="bg-black rounded-lg shadow-md p-8 text-center">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-white mb-4">
                {language === 'es' ? 'Página en Construcción' : 'Under Construction'}
              </h1>
              <p className="text-gray-300 text-lg">
                {language === 'es' 
                  ? 'Estamos trabajando en mejorar esta sección. ¡Vuelve pronto!'
                  : 'We are working on improving this section. Come back soon!'}
              </p>
            </div>
            <div className="animate-pulse">
              <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4"></div>
            </div>
            <button
              onClick={() => router.push('/')}
              className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UnderConstructionPage; 