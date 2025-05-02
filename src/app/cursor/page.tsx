'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CursorPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/under-construction');
  }, [router]);

  return null;
};

export default CursorPage; 