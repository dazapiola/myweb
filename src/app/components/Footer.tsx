'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6">
          <Link 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Twitter
          </Link>
          <Link 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © 2024 Vibecoding. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 