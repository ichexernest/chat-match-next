import React from 'react';
import { ExploreItem } from '../types';
type ExploreCardProps = {
    item:ExploreItem;
    onLike: () => void;
    onDislike: () => void;
    onBlock: () => void;
};

const ExploreCard = ({ item, onLike, onDislike, onBlock }: ExploreCardProps) => {
    return (
        <div className='p-5 rounded-lg bg-white shadow-md'>
            <img className='w-32 h-32' src={item.photos[0]} alt="" />
            <h2 className='text-xl font-semibold'>{item.name}</h2>
            <p className='mt-2'>{item.age}</p>
            <p className='mt-2'>{item.gender}</p>
            <p className='mt-2'>{item.bio}</p>
            <div className="mt-4">
                <button onClick={onDislike} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">不喜歡</button>
                <button onClick={onLike} className="mr-2  px-4 py-2 bg-green-500 text-white rounded">喜歡</button>
                <button onClick={onBlock} className="px-4 py-2 bg-green-500 text-white rounded">檢舉</button>
            </div>
        </div>
    );
};

export default ExploreCard;