import React, { useState } from 'react';
import { ExploreItemFromZod, Gender, Drinking, Smoking, Exercise, StarSign, Prompt } from '../../types';
import { FaTimes } from "react-icons/fa";
import FullProfile from '../FullProfile';
import ProfileBlock from '../ProfileBlock';

const EditProfileCard = ({ item  }:{item: ExploreItemFromZod}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className={` bg-[#DBF2FF] flex flex-col m-auto w-[600px] py-10`}>
<div className='p-10 bg-slate-400 rounded-lg mt-5 '>
  <div className="grid grid-cols-3 gap-4">
    {/* 這裡放 6 張圖片 */}
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-white rounded shadow flex items-center justify-center"
      >
        <img
          src={`https://placehold.co/100x100?text=${i + 1}`}
          alt={`Image ${i + 1}`}
          className="object-cover rounded "
        />
      </div>
    ))}
  </div>
</div>
<ProfileBlock title="profile">
Basic
        job
        height
        starsign
        location
</ProfileBlock>
<ProfileBlock title="detail">
education
        drinkingsmoking
        political
        exercise
        religion
</ProfileBlock>
<ProfileBlock title="core value & interests">
core values
interests
</ProfileBlock>
<ProfileBlock title="bio">
bio
</ProfileBlock>
<ProfileBlock title="prompts">
prompts
</ProfileBlock>
<ProfileBlock title="question">
question
</ProfileBlock>
</div>
  );
};

export default EditProfileCard;