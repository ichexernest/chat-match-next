import { z } from 'zod';
import { MatchStatus, MatchInteractionType,KindredyType} from '.';


export const MatchSchema = z.object({
  id: z.string().optional(),
  matcher: z.string(),
  matcherInteractionType:z.nativeEnum(MatchInteractionType),
  matchee: z.string(),
  matcheeInteractionType: z.nativeEnum(MatchInteractionType),
  status: z.nativeEnum(MatchStatus),
  type: z.nativeEnum(KindredyType),
  activeAt: z.coerce.date(),
  matchedAt: z.coerce.date(),
});

export type MatchFromZod = z.infer<typeof MatchSchema>;
