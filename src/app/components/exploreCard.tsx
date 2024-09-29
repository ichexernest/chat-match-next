import React from 'react';

type ExploreCardProps = {
    item: {
        name: string;
        age: number;
        location: string;
        description: string;
    };
    onLike: () => void;
    onDislike: () => void;
};

const ExploreCard = ({ item, onLike, onDislike }: ExploreCardProps) => {
    return (
        <div className='p-5 rounded-lg bg-white shadow-md'>
            <h2 className='text-xl font-semibold'>{item.name}</h2>
            <p className='mt-2'>{item.age}</p>
            <p className='mt-2'>{item.location}</p>
            <p className='mt-2'>{item.description}</p>
            <div className="mt-4">
                <button onClick={onDislike} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">不喜歡</button>
                <button onClick={onLike} className="px-4 py-2 bg-green-500 text-white rounded">喜歡</button>
            </div>
        </div>
    );
};

export default ExploreCard;