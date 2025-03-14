import React, { useState } from 'react';
import { ExploreItemFromZod, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../types';
import { FaTimes } from "react-icons/fa";
import FullProfile from '../FullProfile';

const ExploreCard = ({ item  }:{item: ExploreItemFromZod}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div onClick={() => setIsShow(!isShow)} className='relative w-[350px] h-[630px] rounded-lg bg-white shadow-md'>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          src={item.photos[1]}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 rounded-lg flex items-end justify-stretch  bg-gradient-to-b from-gray-50/0  to-black/70">
        <div className="relative z-20 p-4 text-white">
          <h2 className="text-4xl font-semibold ">{item.name}, {item.age}</h2>
          <p className="mt-1">{item.job}</p>
          <p className="">{item.location.city}</p>
          <div className='flex gap-2 mt-1 text-xs'>
{item.interests.map((interest, index) => (
  <div key={index} className='px-2 py-1 rounded-full bg-slate-200 opacity-80 text-slate-600'>{interest}</div>
))}
          </div>
        </div>
        </div>
        {isShow && (<div className={`${isShow ? "" : "hidden"
          } fixed md:absolute top-0 left-0 w-screen h-screen bg-white z-50 md:w-[351px] md:h-[631px] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-lg overflow-y-auto`}
        >
        <FullProfile item={item} />
        </div>)
        }
      </div>

    </>
  );
};

export default ExploreCard;