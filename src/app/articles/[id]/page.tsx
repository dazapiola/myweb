'use client';

import MainLayout from '../../layouts/MainLayout';
import { useRouter, useParams } from 'next/navigation';

const ArticlePage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => router.back()}
            className="mb-4 text-indigo-600 hover:text-indigo-800"
          >
            ← Volver
          </button>
          
          <article className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Título del Artículo {id}
            </h1>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Este es el contenido detallado del artículo {id}. Aquí puedes incluir todo el texto,
                imágenes y otros elementos que formen parte del artículo.
              </p>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </article>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticlePage; 