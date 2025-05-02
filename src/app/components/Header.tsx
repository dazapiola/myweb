'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-white font-semibold'
      : 'text-gray-400 hover:text-white transition-colors';
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold hover:text-gray-200 transition-colors">
            Mi Portafolio
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className={isActive('/')}>
                  Perfil
                </Link>
              </li>
              <li>
                <Link href="/articles" className={isActive('/articles')}>
                  Artículos
                </Link>
              </li>
              <li>
                <Link href="/cursor" className={isActive('/cursor')}>
                  Cursor
                </Link>
              </li>
              <li>
                <Link href="/contact" className={isActive('/contact')}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 