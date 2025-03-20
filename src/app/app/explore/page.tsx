'use client'

import { useState, useEffect } from 'react';
import ExploreCard from '../../components/ExploreCard';
import { useExploreData } from '../../hooks/useExploreData'
import { ExploreItemFromZod, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../types';
import { useAuth } from '@/app/providers/authProvider';
import IconBtn from '@/app/components/IconBtn';
import { RiFilter3Line } from "react-icons/ri";
import { FaMask } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import LikesButtons from '@/app/components/LikesBottons';
type ExploreCardProps = {
  itemA: ExploreItemFromZod;
  onLike: () => void;
  onDislike: () => void;
  onBlock: () => void;
};
const fItem: ExploreItemFromZod = {
  id: `aaaaaaa1`,
  name: `Bobddddddsfd`,
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


export default function Explore() {
    const { user } = useAuth();
    const router = useRouter();

    const { items, loading } = useExploreData('')
   // const {handleResult} = useMatch()
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNavigate = () => {
      router.push(`/app/explore/liked`);
  }
    return (
        <div className="container mx-auto flex flex-col items-center">
          <div className='flex justify-between items-center w-full'>
            <IconBtn icon={<FaMask />} hint='Who likes me' onClick={handleNavigate}></IconBtn>
          <h1 className="text-2xl font-bold my-10">Explore</h1>
          <IconBtn icon={<RiFilter3Line />} hint='Filter' onClick={() => {}}></IconBtn>
          </div>
          <div className='mt-10'>
          {items.length > 0 && currentIndex < items.length ? (
            <>
            <ExploreCard
                // item={items[currentIndex]}
                item={fItem}
            />
            <LikesButtons user={user} item={fItem}/>
            </>
            ) : (
                <p>沒有更多項目了</p>
            )}
          </div>
            {loading && <p className="text-center mt-4">載入中...</p>}
        </div>
    );
}

