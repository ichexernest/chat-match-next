"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

interface NavLayoutProps {
    children: React.ReactNode;
  }

export default function NavLayout({ children }: NavLayoutProps) {
  const router = useRouter();
  const handleNavigate = (page: string) => {
      router.push(`/app/${page}`);
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
            {children}
        </main>

        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex justify-around">
            <li>
              <button onClick={() => handleNavigate("explore")}>Explore</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("recs")}>Chatroom</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("profile")}>Profile</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
