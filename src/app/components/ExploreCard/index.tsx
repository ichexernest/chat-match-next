import React, { useState } from 'react';
import { ExploreItem, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../types';
import { FaTimes } from "react-icons/fa";

const ExploreCard = ({ itemA  }:{itemA: ExploreItem}) => {
  const a = itemA
  const [isShow, setIsShow] = useState(false)
  const item: ExploreItem = {
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
          {/* 全屏內容 */}
            <div className='fixed top-0 right-0 p-10'>
              <button onClick={() => setIsShow(false)}><FaTimes/></button>
            </div>
            <img
          className=" top-0 left-0 w-full h-[500px] object-cover"
          src={item.photos[1]}
          alt=""
        />
        <div className='p-5 my-20'>
          <h2 className="text-4xl font-semibold ">{item.name}, {item.age}</h2>
          <p className="mt-1">{item.job}</p>
          <p className="">{item.location.city}</p>
        </div>
        <img
          className=" top-0 left-0 w-full h-[500px] object-cover"
          src={item.photos[0]}
          alt=""
        />
        <div className='p-5 my-20'>

          <p className="mt-1 text-2xl">{item.bio}</p>

        </div>
        </div>)
        }
      </div>

    </>
  );
};

export default ExploreCard;