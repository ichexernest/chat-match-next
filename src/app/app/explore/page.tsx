'use client'

import { useState, useEffect } from 'react';
import ExploreCard from '../../components/exploreCard';
import { useExploreData } from '../../hooks/useExploreData'
import { ExploreItem } from '../../types';
import { useAuth } from '@/app/providers/authProvider';
import NavLayout from '@/app/components/navLayout';

export default function Explore() {
    const { user } = useAuth();
    const { items, loading } = useExploreData('')
   // const {handleResult} = useMatch()
    const [currentIndex, setCurrentIndex] = useState(0);

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
        <NavLayout>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Explore</h1>
            {items.length > 0 && currentIndex < items.length ? (
                <ExploreCard
                item={items[currentIndex]}
                onLike={() => handleInteraction('like')}
                onDislike={() => handleInteraction('dislike')}
                onBlock={() => handleInteraction('block')}
            />
            ) : (
                <p>沒有更多項目了</p>
            )}
            {loading && <p className="text-center mt-4">載入中...</p>}
        </div>
        </NavLayout>
    );
}

