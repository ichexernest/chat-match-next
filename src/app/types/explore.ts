import { Gender, Drinking, Smoking, Exercise, Prompt } from '../types';

export type ExploreItem = {
    id: string;
    name: string;
    age: number;
    gender: Gender;
    bio: string;
    photos: string[];
    interests: string[];
    location: {
        type: string;
        city: string;
        coordinates: number[];
    }
    height: number;
    job: string;
    education: string;
    drinking: Drinking;
    smoking: Smoking;
    starSign: string;
    political: string;
    exercise: Exercise;
    religion: string;
    coreValues: string[];
    prompts:{prompt:Prompt, answer:string}[];
    questions: string[];
}
