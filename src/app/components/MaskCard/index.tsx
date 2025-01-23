import React, { useState } from 'react';
import { ExploreItem, ExploreItemFromZod ,Gender, Drinking, Smoking, Exercise, StarSign, Prompt, } from '../../types';
import { FaTimes } from "react-icons/fa";

const MaskCard = ({ itemA , onClick }:{itemA: ExploreItemFromZod, onClick: () => void}) => {
  const a = itemA
  const [isShow, setIsShow] = useState(false)
  const item: ExploreItemFromZod = {
    id: `aaaaaaa1`,
    name: `Bob`,
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

  return (
    <>
      <div onClick={onClick} className='relative w-[250px] h-[500px] rounded-lg bg-white shadow-md'>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-lg"
          src={item.photos[1]}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 rounded-lg flex items-end justify-stretch  bg-gradient-to-b from-gray-50/0  to-black/70">
        <div className="relative z-20 p-4 text-white">
          <h2 className="text-4xl font-semibold ">{item.name}, {item.age}</h2>
          <p className="">{item.location.city}</p>
          <div className='flex gap-2 mt-1 text-xs'>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default MaskCard;