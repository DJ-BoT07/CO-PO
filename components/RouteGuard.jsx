"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/utils/firebase';
import { Loader } from '@/components/ui/loader';

export function RouteGuard({ children }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/login');
      } else {
        setAuthorized(true);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!authorized) {
    return <Loader />;
  }

  return <>{children}</>;
} 