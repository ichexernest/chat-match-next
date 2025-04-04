"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function ProfileBlock({ title, children }: { title: string, children: React.ReactNode  }) {
  const [isShow, setIsShow] = useState(false)

  return (<div className='p-10 bg-white bg-opacity-75 rounded-3xl mt-5' onClick={()=>setIsShow(!isShow)}>
  <div className='flex justify-between items-center'>
  <p className='text-2xl text-black'>{title}</p>
  {isShow? <FaAngleUp className='inline-block ml-2'/>: <FaAngleDown className='inline-block ml-2'/>}
  </div>
  <div className={`mt-3 ${isShow? ``: `hidden`}`}>{children}</div>
</div>)
}

