'use client'

import ChatArea from "@/app/components/ChatArea";
import { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import MatchedAvatar from "@/app/components/MatchedAvatar";
import { useMatchedRecords } from "@/app/hooks/useMatchedRecord";
import { MatchedRecordFromZod} from "../../types";
import ChatRecordCard from "@/app/components/ChatRecordCard";

export default function Recs() {
    const matches = useMatchedRecords(20); 
      

    const [currentChat, setCurrentChat] = useState<MatchedRecordFromZod | null>(null)
  return (


    <div className="container mx-auto h-screen overflow-hidden flex">
    <div className='w-1/4 h-full border border-gray-200 '>
    <div className="flex overflow-x-auto space-x-4 p-4">
      {matches.map((i, index) => 
        i.latestMessage == ''  &&  
        <button key={i.id} className="flex flex-col justify-center items-center">
          <MatchedAvatar  item={i} />
          <p className="text-xs">{i.matcheeName}</p>
        </button>
      )}
    </div>

    <ul className='my-3 flex flex-col justify-center items-stretch h-full overflow-auto'>
        {matches.map((i, index) => (
            i.latestMessage !== ''  &&
            <ChatRecordCard key={i.id}  item={i} handleClick={()=>setCurrentChat(i)} />
        ))}
    </ul>
    </div>
    <div className='w-3/4 h-full flex justify-center items-center'>
    <ChatArea item={currentChat}  />
    </div>
</div>

)
}