import { z } from 'zod';
import { MatchStatus, MatchInteractionType,KindredyType, MatchPhase} from '.';


export const MatchedRecordSchema = z.object({
  id: z.string().optional(),
  matcheeId: z.string(),
  matcheeName: z.string(),
  photo: z.string(),
  matcheeInteractionType: z.nativeEnum(MatchInteractionType),
  status: z.nativeEnum(MatchStatus),
  type: z.nativeEnum(KindredyType),
  phase:z.nativeEnum(MatchPhase),
  latestMessage: z.string().optional(),
  activeAt: z.coerce.date(),
  matchedAt: z.coerce.date(),
});

export type MatchedRecordFromZod = z.infer<typeof MatchedRecordSchema>;
