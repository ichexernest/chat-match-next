"use client";
import { useState } from 'react';

export default function IconBtn({ icon, hint, onClick }: { icon: React.ReactNode, hint: string, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  return(
    <div className="relative inline-block">
    {/* 按鈕 */}
    <button
      className="p-3 rounded-lg text-slate-600 text-3xl hover:bg-slate-300"
      onClick={onClick}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {icon}
    </button>

    {/* Hint */}
    <div
      className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap bg-slate-800 text-white text-sm px-3 py-1 rounded ${
        isHovered ? "block" : "hidden"
      }`}
    >
      {hint}
    </div>
  </div>
  )
}

