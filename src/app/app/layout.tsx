"use client";

import { usePathname } from 'next/navigation';
import { FaHeart } from "react-icons/fa";
import { FaMessage, FaUserLarge  } from "react-icons/fa6";
import NavIconBtn from '../components/NavIconBtn';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isCurrentRoute = (route: string) => pathname.includes(route);

  return (
    <>
      <div className="flex flex-col md:flex-row-reverse h-screen overflow-hidden">
        <main className="flex-grow">
          {children}
        </main>

        <nav className="text-white p-4">
          <div className="flex gap-8 justify-around md:flex-col md:justify-center md:h-full">
            <NavIconBtn route="explore" icon={<FaHeart />} isCurrent={isCurrentRoute("explore")} />
            <NavIconBtn route="recs" icon={<FaMessage />} isCurrent={isCurrentRoute("recs")} />
            <NavIconBtn route="profile" icon={<FaUserLarge />} isCurrent={isCurrentRoute("profile")} />
          </div>
        </nav>
      </div>
    </>
  );
}
