'use client';

import MainLayout from '../layouts/MainLayout';
import { useRouter } from 'next/navigation';

const ArticlesPage = () => {
  const router = useRouter();

  const handleArticleClick = (articleId: string) => {
    router.push(`/articles/${articleId}`);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Todos los Artículos</h1>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Título del Artículo 1</h2>
              <p className="text-gray-600 mt-2">Breve descripción del artículo...</p>
              <button 
                onClick={() => handleArticleClick('1')}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Leer más →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Título del Artículo 2</h2>
              <p className="text-gray-600 mt-2">Breve descripción del artículo...</p>
              <button 
                onClick={() => handleArticleClick('2')}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Leer más →
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-700">Título del Artículo 3</h2>
              <p className="text-gray-600 mt-2">Breve descripción del artículo...</p>
              <button 
                onClick={() => handleArticleClick('3')}
                className="mt-4 text-indigo-600 hover:text-indigo-800"
              >
                Leer más →
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlesPage; 