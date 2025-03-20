"use client";

import { ExploreItemFromZod } from "@/app/types";
import { FaTimes,FaCheck,FaStar } from "react-icons/fa";
import { } from "react-icons/fa6";


export default function LikesButtons({ user, item }: { user: any, item: ExploreItemFromZod}) {
  const handleInteraction = async(action: 'like' | 'dislike' | 'block' | 'superlike' | 'turbo') => {
    // 這裡可以根據需要處理喜歡或不喜歡的邏輯
    console.log(`User ${action}d item:`, item.id);
    if(action === 'like'){
        const response = await fetch('/api/interactions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              swiper: user?._id, 
              swipee: item.id,  
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
              swipee: item.id,  
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
              swipee: item.id,  
              type: 'block'
            }),
          });
        
          const data = await response.json();
          console.log(data);
    }
    // 移動到下一個項目
    //setCurrentIndex(prevIndex => prevIndex + 1);
};

  return(
    <div className="flex justify-center items-center mt-3 gap-2">
    <button
      onClick={()=>handleInteraction('like')}
      className="p-4 bg-white bg-opacity-80 text-green-500 text-2xl rounded-full shadow-md hover:bg-opacity-100"
    >
      <FaCheck />
    </button>
    <button
      onClick={()=>handleInteraction('dislike')}

      className="p-6 bg-white bg-opacity-80 text-blue-500 text-3xl rounded-full shadow-md hover:bg-opacity-100"
    >
      <FaStar  />
    </button>
    <button
      onClick={()=>handleInteraction('block')}

      className="p-4 bg-white bg-opacity-80 text-red-500 text-2xl rounded-full shadow-md hover:bg-opacity-100"
    >
      <FaTimes />
    </button>
  </div>
  )
}

