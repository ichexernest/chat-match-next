'use client'

import { useState, useEffect } from 'react';
import ExploreCard from '@/app/components/ExploreCard';
import { useExploreData } from '@/app/hooks/useExploreData'
import { ExploreItemFromZod } from '@/app/types';
import { useAuth } from '@/app/providers/authProvider';
import IconBtn from '@/app/components/IconBtn';
import { RiFilter3Line } from "react-icons/ri";
import { FaMask } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import MaskCard from '@/app/components/MaskCard';
import { FaTimes } from 'react-icons/fa';
type ExploreCardProps = {
  itemA: ExploreItemFromZod;
  onLike: () => void;
  onDislike: () => void;
  onBlock: () => void;
};


export default function Liked() {
    const { user } = useAuth();
    const router = useRouter();

    const { items, loading } = useExploreData('')
   // const {handleResult} = useMatch()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expand, setExpand] = useState(false);

    const handleNavigate = () => {
      router.push(`/app/explore`);
  }

  const handleExpand = (item: number) => {
    setCurrentIndex(items.indexOf(item))
    setExpand(true)
}

    const handleInteraction = async(action: 'like' | 'dislike' | 'block' | 'superlike' | 'turbo') => {
        // 這裡可以根據需要處理喜歡或不喜歡的邏輯
        console.log(`User ${action}d item:`, items[currentIndex]);
        if(action === 'like'){
            const response = await fetch('/api/interactions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  swiper: user?._id, 
                  swipee: items[currentIndex].id,  
                  type: 'like'
                }),
              });
            
              const data = await response.json();
              console.log(data);
        }else if(action === 'dislike'){
            const response = await fetch('/api/interactions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  swiper: user?._id, 
                  swipee: items[currentIndex].id,  
                  type: 'dislike'
                }),
              });
            
              const data = await response.json();
              console.log(data);
        }else{
            const response = await fetch('/api/interactions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  swiper: user?._id, 
                  swipee: items[currentIndex].id,  
                  type: 'block'
                }),
              });
            
              const data = await response.json();
              console.log(data);
        }
        // 移動到下一個項目
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
      <div className='flex h-full'>
        <div className="container mx-auto flex flex-col items-center bg-slate-300">
          <div className='flex justify-between items-center w-full'>
            <IconBtn icon={<FaMask />} hint='Who likes me' onClick={handleNavigate}></IconBtn>
          <h1 className="text-2xl font-bold my-10">Who likes you</h1>
          <IconBtn icon={<FaMask />} hint='Who likes me' onClick={handleNavigate}></IconBtn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full overflow-auto">
          {items.map((item) => (
            <MaskCard key={item.id} itemA={item} onClick={() => handleExpand(items.indexOf(item))} />
          ))}
        </div>
        </div>
        <div className={`flex justify-center items-center flex-col bg-slate-600 ${expand ? 'w-[450px]' : 'w-0 hidden'}`}>
          <button><FaTimes className="absolute top-3 right-3 text-3xl text-white" onClick={() => setExpand(false)} /></button>
          <ExploreCard itemA={items[currentIndex]} />
          {loading && <p className="text-center mt-4">載入中...</p>}
            <div className="flex justify-center mt-3 gap-2">
            <button
              onClick={()=>handleInteraction('like')}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              不喜歡
            </button>
            <button
              onClick={()=>handleInteraction('dislike')}

              className="px-4 py-2 bg-yellow-500 text-white rounded"
            >
              超喜歡
            </button>
            <button
              onClick={()=>handleInteraction('block')}

              className=" px-4 py-2 bg-green-500 text-white rounded"
            >
              喜歡
            </button>
          </div>
        </div>
      </div>
    );
}

