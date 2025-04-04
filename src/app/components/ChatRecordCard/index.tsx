import React, { useState } from 'react';
import {
  MatchedRecordFromZod,
MatchInteractionType,
MatchStatus,
KindredyType,
MatchPhase,
} from "../../types";
import MatchedAvatar from '../MatchedAvatar';

const ChatRecordCard = ({ item, handleClick }: { item: MatchedRecordFromZod; handleClick: React.MouseEventHandler<HTMLLIElement> }) => {

  return (
    <li key={item.id} className="mt-3" onClick={handleClick}><div>
    <div className="card  border-b rounded-md text-slate-700 p-3">
        <div className="card-body flex justify-start items-center gap-3">
          <MatchedAvatar item={item} />
          <div>
          <h2 className="card-title text-lg">{item.matcheeName}</h2>
          <p className="card-content text-sm">{item.latestMessage}</p>
          </div>
        </div>
    </div>
    </div>
</li>
  );
};

export default ChatRecordCard;