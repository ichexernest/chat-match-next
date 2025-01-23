// src/types/ExploreItem.schema.ts
import { z } from 'zod';
import { Gender, Drinking, Smoking, Exercise, Prompt } from '../types'; 

// ExploreItem 裡的 prompt: { prompt: Prompt, answer: string }[]
const PromptAnswer = z.object({
  prompt: Prompt,
  answer: z.string(),
});

export const ExploreItem = z.object({
  id: z.string(),
  name: z.string(),
  age: z.number(),
  gender: z.nativeEnum(Gender),
  bio: z.string(),
  photos: z.array(z.string()),
  interests: z.array(z.string()),
  location: z.object({
    type: z.string(),
    city: z.string(),
    coordinates: z.array(z.number()).length(2),
  }),
  height: z.number(),
  job: z.string(),
  education: z.string(),
  drinking: z.nativeEnum(Drinking),
  smoking: z.nativeEnum(Smoking),
  starSign: z.string(),
  political: z.string(),
  exercise: z.nativeEnum(Exercise),
  religion: z.string(),
  coreValues: z.array(z.string()),
  prompts: z.array(PromptAnswer),
  questions: z.array(z.string()),
});

// 從 Zod Schema 推導出 TS 型別
export type ExploreItemFromZod = z.infer<typeof ExploreItem>;
