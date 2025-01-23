
  import { z } from 'zod';
  // 假設 Prompt 是物件
  export const Prompt = z.object({
    _id: z.string(),
    title: z.string(),
    type: z.string(),
  });
  
  export type PromptFromZod = z.infer<typeof Prompt>;