"use client";

import { useRouter } from 'next/navigation';

export default function NavIconBtn({ route, icon, isCurrent }: { route: string , icon: React.ReactNode, isCurrent: boolean }) {
  const router = useRouter();
  const handleNavigate = (page: string) => {
      router.push(`/app/${page}`);
  }
  return <button className={`${isCurrent ? "" : "opacity-50"} p-3 rounded-lg text-slate-600 text-3xl`} onClick={() => handleNavigate(route)}>{icon}</button>

}

