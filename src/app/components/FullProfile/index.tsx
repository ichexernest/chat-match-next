import React, { useState } from 'react';
import { ExploreItemFromZod} from '../../types';
import { FaGraduationCap } from 'react-icons/fa';
import ItemBadge from '../ItemBadge';
import { it } from 'node:test';


const FullProfile = ({ item }: { item: ExploreItemFromZod }) => {
    return (
        <div className={` bg-[#DBF2FF]`}>
            {/** template: the first photo  */}
            {/** template: basic info(name, age, gender, height, starSign, job*, city*)  */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[0]}
                alt=""
            />
            <div className='p-5 my-10'>
                <h2 className="text-4xl font-semibold ">{item.name}, {item.age}</h2>
                <p className="mt-1">{item.job}</p>
                <p className="mt-1">{item.gender}</p>
                <p className="mt-1">{item.height}</p>
                <p className="mt-1">{item.starSign}</p>
                <p className="">{item.location.city}</p>
            </div>
            {/** template: second photo  */}
            {/** template: bio */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[1]}
                alt=""
            />
            <div className='p-5 my-20'>
                <p className="mt-1">{item.bio}</p>
            </div>

            {/** template: other photo  */}
            {/** template: basic info2(edu, interests)  */}
            {/** template: drinking, smoking, political, exercise, religion */}
            {/** template: coreValues */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[0]}
                alt=""
            />
            <div className='p-5 my-20'>
                <ItemBadge icon={<FaGraduationCap />} title={item.education} />
                {item.interests.map((interest) => (
                    <ItemBadge key={interest} icon={<FaGraduationCap />} title={interest} />
                ))}
                <ItemBadge icon={<FaGraduationCap />} title={item.drinking} />
                <ItemBadge icon={<FaGraduationCap />} title={item.smoking} />
                <ItemBadge icon={<FaGraduationCap />} title={item.political} />
                <ItemBadge icon={<FaGraduationCap />} title={item.exercise} />
                <ItemBadge icon={<FaGraduationCap />} title={item.religion} />
                {/* <p className="mt-1">{item.coreValues}</p> */}
            </div>

            {/** template: other photo  */}
            {/** template: prompts */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[0]}
                alt=""
            />
            <div className='p-5 my-20'>
                <p className="mt-1">{item.prompts[0].prompt.title}</p>
                <p className="mt-1">{item.prompts[0].answer}</p>
            </div>

            {/** template: other photo  */}
            {/** template: questions */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[1]}
                alt=""
            />
            <div className='p-5 my-20'>
                <p className="mt-1">{item.questions}</p>
            </div>
        </div>

    );
};

export default FullProfile;