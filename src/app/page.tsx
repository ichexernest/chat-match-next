'use client'

import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();
  const handleStart = () =>{
    //check auth
    // navigate to login
    router.push('/login');
    // or navigate to home
    //router.push('/login');
  }

  return (
    <>
      <button className="p-5 bg-slate-600 text-white m-5" onClick={() => handleStart()}> Let's Start</button>
    </>

  );
}
