import React, { useState } from 'react';
import { ExploreItemFromZod} from '../../types';
import { FaGraduationCap } from 'react-icons/fa';
import ItemBadge from '../ItemBadge';


const FullProfile = ({ item }: { item: ExploreItemFromZod }) => {
    return (
        <div className={` bg-[#DBF2FF]`}>
            {/** template: the first photo  */}
            {/** template: basic info(name, age, gender, height, starSign, job*, city*)  */}
            {/** template: basic info2(name, age, gender, height, starSign, job*, city*)  */}
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
                <div className='mt-3'></div>
                <ItemBadge icon={<FaGraduationCap />} title={item.education} />
                <ItemBadge icon={<FaGraduationCap />} title={item.drinking} />
                <ItemBadge icon={<FaGraduationCap />} title={item.smoking} />
                <ItemBadge icon={<FaGraduationCap />} title={item.political} />
                <ItemBadge icon={<FaGraduationCap />} title={item.exercise} />
                <ItemBadge icon={<FaGraduationCap />} title={item.religion} />
            </div>
            {/** template: second photo  */}
            {/** template: bio */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[1]}
                alt=""
            />
            <div className='p-5 my-20'>
                <p className="mt-1 text-2xl">{item.bio}</p>
            </div>

            {/** template: other photo  */}
            {/** template: interests */}
            {/** template: core values */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[0]}
                alt=""
            />
            <div className='p-5 my-10'>
                <div>
                <p className="my-1 text-2xl">Interests</p>
                {item.interests.map((interest) => (
                    <ItemBadge key={interest} icon={<FaGraduationCap />} title={interest} />
                ))}
                </div>
                <div className='mt-5'>
                <p className="my-1 text-2xl">Core Values</p>
                {item.coreValues.map((coreValue) => (
                    <ItemBadge key={coreValue} icon={<FaGraduationCap />} title={coreValue} />
                ))}
                </div>

            </div>

            {/** template: other photo  */}
            {/** template: prompts */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[0]}
                alt=""
            />
            <div className='p-5 my-10'>
            {item.prompts.map((prompt, index) => (
                            <div key={index} className='rounded-lg shadow-lg'>
                                <div className='bg-white opacity-65 p-1 rounded-t-lg'>
                                <p className="">{prompt.prompt.title}</p>
                                </div>
                            <div className='p-3'>
                            <p className="text-lg">{prompt.answer}</p>
                            </div>
                        </div>
                ))}
            </div>

            {/** template: other photo  */}
            {/** template: questions */}
            <img
                className=" top-0 left-0 w-full h-[500px] object-cover"
                src={item.photos[1]}
                alt=""
            />
            <div className='p-5 my-20'>
                <p className="mt-1 text-2xl">{item.questions}</p>
            </div>
        </div>

    );
};

export default FullProfile;