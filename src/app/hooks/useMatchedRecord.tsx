import { useMemo } from "react";
import { z } from "zod";
import {
    MatchedRecordFromZod,
  MatchInteractionType,
  MatchStatus,
  KindredyType,
  MatchPhase,
} from "../types";

export const useMatchedRecords = (count = 20): MatchedRecordFromZod[] => {
  return useMemo(() => {
    const names = ["Alex", "Taylor", "Jordan", "Morgan", "Casey", "Riley", "Jamie", "Harper", "Avery", "Rowan"];
    const interactionTypes = [
      MatchInteractionType.Like,
      MatchInteractionType.Dislike,
      MatchInteractionType.Superlike,
      MatchInteractionType.Block,
      MatchInteractionType.Turbo,
    ];
    const statuses = [MatchStatus.Matched, MatchStatus.Unmatched, MatchStatus.Block];
    const types = [KindredyType.Classic, KindredyType.Spark];
    const phases = [
      MatchPhase.Prematch,
      MatchPhase.Waiting,
      MatchPhase.Prechat,
      MatchPhase.Match,
      MatchPhase.Fail,
    ];

    return Array.from({ length: count }, (_, i) => ({
      id: `match-${i + 1}`,
      matcheeId: `user-${i + 100}`,
      matcheeName: `${names[i % names.length]} ${i + 1}`,
      photo: `https://i.pravatar.cc/150?img=${i + 1}`,
      matcheeInteractionType: interactionTypes[i % interactionTypes.length],
      status: statuses[i % statuses.length],
      type: types[i % types.length],
      phase: phases[i % phases.length],
      latestMessage: i % 4 === 0 ? '' : `最近訊息 ${i + 1}`,
      activeAt: new Date(Date.now() - i * 1000 * 60),
      matchedAt: new Date(Date.now() - i * 1000 * 60 * 10),
    }));
  }, [count]);
};
