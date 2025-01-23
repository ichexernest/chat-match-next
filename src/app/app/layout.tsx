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
      {/* 
        1. 外層改為 h-screen + overflow-hidden，
           讓整個容器高度固定於視窗，且不整頁捲動
        2. 移除原本的 min-h-screen 
      */}
      <div className="flex flex-col md:flex-row-reverse h-screen overflow-hidden">
        {/* 
          main 區域若需要捲動，就使用 overflow-y-auto
          p-5 可以保留或視需求調整
        */}
        <main className="flex-grow overflow-y-auto p-5">
          {children}
        </main>

        <nav className="text-white p-4">
          {/* 
            這裡可以視需求調整寬度或高度 
            例如：
            md:w-20 (固定寬度)，或 
            md:h-full (固定高度)
          */}
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
