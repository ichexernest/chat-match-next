import { useState, useEffect } from 'react';
import ExploreCard from '../components/exploreCard';
import { useExploreData } from '../hooks/useExploreData'
import { useMatch } from '../hooks/useMatch'
import { ExploreItem } from '../types';

export default function Explore() {
    const { items, loading } = useExploreData('')
    const {handleResult} = useMatch()
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleAction = (action: 'like' | 'dislike') => {
        // 這裡可以根據需要處理喜歡或不喜歡的邏輯
        console.log(`User ${action}d item:`, items[currentIndex]);
        if(action === 'like'){
            //match
            handleResult(items[currentIndex].id, 'like')
        }else{
            //mark as dislike
            handleResult(items[currentIndex].id, 'dislike')
        }
        // 移動到下一個項目
        setCurrentIndex(prevIndex => prevIndex + 1);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Explore</h1>
            {items.length > 0 && currentIndex < items.length ? (
                <ExploreCard
                item={items[currentIndex]}
                onLike={() => handleAction('like')}
                onDislike={() => handleAction('dislike')}
            />
            ) : (
                <p>沒有更多項目了</p>
            )}
            {loading && <p className="text-center mt-4">載入中...</p>}
        </div>
    );
}

