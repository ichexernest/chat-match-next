import React, { useState } from 'react';
import {
  MatchedRecordFromZod,
MatchInteractionType,
MatchStatus,
KindredyType,
MatchPhase,
} from "../../types";

const MatchedAvatar = ({ item  }:{item: MatchedRecordFromZod}) => {

  return (
    <div
    className={`border border-2 ${item.type == "classic" ? "border-blue-600" : "border-red-600"} bg-white text-black w-[60px] h-[60px] rounded-full shadow flex items-center justify-center shrink-0`}
    >
    <img
      src={item.photo}
      alt={item.id}
      className="object-cover rounded-full w-full h-full"
    />
  </div>
  );
};

export default MatchedAvatar;