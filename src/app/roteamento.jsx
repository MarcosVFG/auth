'use client';

import { useRouter } from 'next/navigation';
 
export default function Pqp() {
  const router = useRouter();
 
  return (
    <button type="button" onClick={() => router.push('/LoginPage')}>
      Dashboard
    </button>
  );
}