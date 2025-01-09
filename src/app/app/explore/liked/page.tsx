'use client'

import { useState, useEffect } from 'react';
import ExploreCard from '@/app/components/ExploreCard';
import IconBtn from '@/app/components/IconBtn';
import { RiFilter3Line } from "react-icons/ri";
import { FaMask } from "react-icons/fa6";

function IconBtna({ icon, hint, onClick }: { icon: React.ReactNode; hint: string; onClick: () => void }) {
  return (
    <button 
      className="p-2 bg-gray-200 rounded hover:bg-gray-300" 
      onClick={onClick}
    >
      {icon}
      <span className="sr-only">{hint}</span>
    </button>
  );
}

export default function Liked() {

  // 用來判斷是否有「選到卡片」; 有則顯示詳細區
  const [selectedCard, setSelectedCard] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-100">
      {/* 
        1. 左側的主要內容區
           - 利用 transition + margin-right 來做「壓縮」的感覺
           - 當 selectedCard = true 時，預留空間給右側面板 
      */}
      <div
        className={`container mx-auto flex flex-col items-center transition-all duration-300 ${
          selectedCard ? "mr-[350px]" : "mr-0"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <IconBtna
            icon={<FaMask />}
            hint="Back"
            onClick={() => {
              // 假裝按下這個按鈕會清除選取
              setSelectedCard(false);
            }}
          />
          <h1 className="text-2xl font-bold my-10">Who likes you</h1>
          <div></div>
        </div>

        <div className="flex gap-5 bg-slate-400 p-5 w-full justify-center">
          {/* 
            模擬卡片們 
            點擊後，就 setSelectedCard(true)，右側面板就會出現
          */}
          {[1, 2, 3].map((cardId) => (
            <div
              key={cardId}
              className="w-40 h-60 bg-white shadow-md cursor-pointer flex items-center justify-center"
              onClick={() => setSelectedCard(true)}
            >
              Card {cardId}
            </div>
          ))}
        </div>
      </div>

      {/* 
        2. 右側詳細卡片區（絕對定位）
           - 預設寬度 350px，可自行調整
           - 根據 selectedCard 來判斷顯示/隱藏、或 slide in/out 動畫 
      */}
      <div
        className={`absolute top-0 right-0 h-full bg-white shadow-lg border-l border-gray-300 transition-all duration-300
          ${selectedCard ? "w-[350px]" : "w-0"}
        `}
      >
        {/* 如果 w-0，不要顯示內容以免被擠壓；也可做 translate-X 效果 */}
        {selectedCard && (
          <div className="p-5">
            <button
              className="mb-5 text-gray-600"
              onClick={() => setSelectedCard(false)}
            >
              關閉
            </button>
            <h2 className="text-xl font-bold mb-2">詳細資訊</h2>
            <p>這裡放詳細卡片內容...</p>
          </div>
        )}
      </div>
    </div>
  );
}

