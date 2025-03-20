'use client'

import { useState, useEffect } from 'react';
import ExploreCard from '@/app/components/ExploreCard';
import { useExploreData } from '@/app/hooks/useExploreData'
import { ExploreItemFromZod, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../../types';
import { useAuth } from '@/app/providers/authProvider';
import IconBtn from '@/app/components/IconBtn';
import { RiFilter3Line } from "react-icons/ri";
import { FaArrowLeft, FaMask } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import MaskCard from '@/app/components/MaskCard';
import { FaTimes } from 'react-icons/fa';
import FullProfile from '@/app/components/FullProfile';
import LikesButtons from '@/app/components/LikesBottons';
type ExploreCardProps = {
  itemA: ExploreItemFromZod;
  onLike: () => void;
  onDislike: () => void;
  onBlock: () => void;
};


const fItem: ExploreItemFromZod = {
  id: `aaaaaaa1`,
  name: `Bobddddwgddsfd`,
  age: 29,
  gender: Gender.Male,
  bio: `Nice to meet you!`,
  photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gaxAkYYDw8UfNleSC2Viswv3xSmOa4bIAQ&s", "https://media.vanityfair.com/photos/5f5245d91e10df7a77868af6/16:9/w_2000,h_1125,c_limit/avatar-the-last-airbender.jpg"],
  interests: ["basketball", "music", "reading", "cooking"],
  location: {
    type: `normal`,
    city: `taipei`,
    coordinates: [25.010610, 121.533233],
  },
  height: 171,
  job: `graphic designer`,
  education: `NTU`,
  drinking: Drinking.Always,
  smoking: Smoking.Always,
  starSign: StarSign.Leo,
  political: `No political view`,
  exercise: Exercise.Always,
  religion: `Budah`,
  coreValues: ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"],
  prompts: [{ prompt: { _id: "1", title: "my favorite starsign", type: "relationship" }, answer: "Leo" }],
  questions: ["Do you like to play video games?"]
}
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

    return (
      <div className='flex h-full'>
        <div className="container mx-auto flex flex-col items-center bg-slate-300">
          <div className='flex justify-between items-center w-full'>
            <IconBtn icon={<FaArrowLeft />} hint='Back' onClick={handleNavigate}></IconBtn>
          <h1 className="text-2xl font-bold my-10">Who likes you</h1>
          <div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-full overflow-auto">
          {items.map((item) => (
            <MaskCard key={item.id} itemA={item} onClick={() => handleExpand(items.indexOf(item))} />
          ))}
        </div>
        </div>
        <div className={`flex justify-center items-center flex-col bg-slate-900 ${expand ? 'w-[450px]' : 'w-0 hidden'}`}>
          <button><FaTimes className="absolute top-9 right-9 text-3xl text-white" onClick={() => setExpand(false)} /></button>
          <div className='overflow-auto pb-5'>
          {/* <FullProfile item={items[currentIndex]} /> */}
          <FullProfile item={fItem} />
          <LikesButtons user={user} item={fItem}/>
            </div>
          {loading && <p className="text-center mt-4">載入中...</p>}
        </div>
      </div>
    );
}

