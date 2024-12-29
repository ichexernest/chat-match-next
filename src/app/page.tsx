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
    <nav className='sticky top-0 flex bg-white justify-between items-center p-5'>
      <h2 className='text-3xl font-bold'>Kindredy</h2>
      <div className='flex gap-5'>
        <button>About</button>
        <button>News</button>
        <button>Login</button>
      </div>
    </nav>
    <div className='flex flex-col bg-slate-600 text-white justify-center items-center h-[500px]'>
    <h2 className='text-3xl font-bold p-5'>The best dating app in the world</h2>
    <button className="p-5 bg-slate-200 text-slate-600 m-5" onClick={() => handleStart()}> Let's Start</button>
    </div>
    <div className='flex bg-blue-200 flex-col justify-center items-center h-[500px]'>
    <h2 className='text-3xl font-bold p-5'>The best dating app in the world</h2>

    </div>
    <div className='flex  bg-green-300 flex-col justify-center items-center h-[500px]'>
    <h2 className='text-3xl font-bold p-5'>The best dating app in the world</h2>

    </div>
    </>

  );
}
