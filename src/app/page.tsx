'use client';

import MainLayout from './layouts/MainLayout';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { translations, Language, Translation } from './i18n';
import { useState } from 'react';

const HomePage = () => {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>('es');
  const t: Translation = translations[language];

  const handleArticleClick = (articleId: string) => {
    router.push(`/articles/${articleId}`);
  };

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

          {/* Sección de Perfil */}
          <div className="bg-black rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/perfil.jpeg"
                  alt={`Foto de perfil de ${t.personalInfo.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{t.personalInfo.name}</h1>
                <p className="text-gray-300">{t.personalInfo.role}</p>
                <p className="text-gray-400 mt-2">{t.personalInfo.description}</p>
              </div>
            </div>

            {/* Fortalezas y Experiencia */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">{t.sections.strengthsAndExperience}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200 mb-2">{t.sections.strengths}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {t.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200 mb-2">{t.sections.experience}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {t.experience.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Preferencias Técnicas */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white mb-4">{t.sections.technicalPreferences}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200 mb-2">{t.sections.languages}</h3>
                  <ul className="space-y-1 text-gray-300">
                    {t.technicalPreferences.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200 mb-2">{t.sections.frameworks}</h3>
                  <ul className="space-y-1 text-gray-300">
                    {t.technicalPreferences.frameworks.map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-200 mb-2">{t.sections.tools}</h3>
                  <ul className="space-y-1 text-gray-300">
                    {t.technicalPreferences.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Artículos */}
          <div className="bg-black rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-white mb-4">{t.sections.articles}</h2>
            <div className="space-y-4">
              {t.articles.map((article) => (
                <div key={article.id} className="border-b border-gray-800 pb-4">
                  <h3 className="text-lg font-semibold text-gray-200">{article.title}</h3>
                  <p className="text-gray-300 mt-2">{article.description}</p>
                  <button 
                    onClick={() => handleArticleClick(article.id)}
                    className="mt-2 text-gray-300 hover:text-white"
                  >
                    {t.sections.readMore}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
