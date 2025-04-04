'use client'

import { useAuth } from '@/app/providers/authProvider';
import { useState } from 'react';
import { ExploreItemFromZod, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../types';
import ExploreCard from '../../components/ExploreCard';
import EditProfileCard from '@/app/components/EditProfileCard';

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
  
export default function Profile() {

    const { user } = useAuth();
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div className="container mx-auto h-screen overflow-hidden flex">
            <div className='w-1/4 h-full overflow-auto border-r border-gray-200 p-4'>
            <div className='my-3 flex flex-col justify-center items-start'>
                <img src={user?.profile?.photos[0]} alt="" />
                <p>{user?.profile?.name}</p>
                <p>{user?._id}</p>
                <button>language</button>
                <button>policies</button>
                <button>hide account</button>
                <button>logout</button>
                <button>delete account</button>
            </div>
            <div className='my-3 flex flex-col justify-start items-start'>
                <button>Point</button>
                <button>20000p</button>
                <button>buy</button>
            </div>
            </div>
            <div className='w-3/4 h-full'>
            {
                isEdit ?  
                <div className='h-full overflow-auto p-4'>
                    <button className='bg-blue-500 text-white py-2 px-5' onClick={()=>setIsEdit(false)}>back</button>
                    <EditProfileCard item={fItem}/>
                </div>
            :           
                <div className='flex flex-col justify-center items-center'>
                    <button className='bg-blue-500 text-white py-2 px-5' onClick={()=>setIsEdit(true)}>edit</button>
                    <ExploreCard item={fItem}/>
                </div>
                
            }

            </div>
        </div>
    );
}

