// src/types/ActiveUser.schema.ts
import { z } from 'zod';
import { Gender, Drinking, Smoking, Exercise, StarSign } from '../types';
import { Prompt } from '../types'; // 若有單獨檔案，或可直接 inline

// 如果 Prompt 不是 enum 而是個物件型別，先定義 prompts 裡的物件結構
const PromptAnswer = z.object({
  prompt: Prompt,   // 參考前面定義的 PromptSchema
  answer: z.string(),
});

// 建立 ActiveUserSchema
export const ActiveUserSchema = z.object({
  _id: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(), // 也可不加 .email()，看需求

  profile: z.object({
    name: z.string(),
    age: z.number(),
    height: z.number(),
    job: z.string(),
    education: z.string(),
    drinking: z.nativeEnum(Drinking),
    smoking: z.nativeEnum(Smoking),
    starSign: z.nativeEnum(StarSign),
    political: z.string(),
    exercise: z.nativeEnum(Exercise),
    religion: z.string(),
    gender: z.nativeEnum(Gender),
    bio: z.string(),
    photos: z.array(z.string()),
    interests: z.array(z.string()),
    coreValues: z.array(z.string()),

    location: z.object({
      type: z.string(),
      city: z.string(),
      coordinates: z.array(z.number()).length(2),
    }),

    // prompts: { prompt: Prompt, answer: string }[]
    prompts: z.array(PromptAnswer),

    questions: z.array(z.string()),
  }),

  preferences: z.object({
    preferredGenders: z.union([
      z.string(),
      z.array(z.string()),
    ]),
    ageRange: z.object({
      min: z.number(),
      max: z.number(),
    }),
    maxDistance: z.number(),
  }),

  // Date 在 Zod 通常用 z.date()，但若後端/資料庫回傳是字串，建議用 z.coerce.date() 自動轉
  createdAt: z.coerce.date(),
  lastActiveAt: z.coerce.date(),
});

// 從 schema 推導出 TS 型別
export type ActiveUserFromZod = z.infer<typeof ActiveUserSchema>;
