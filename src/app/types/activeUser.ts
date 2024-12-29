import { Gender, Drinking, Smoking, Exercise, Prompt, StarSign } from '../types';
export type ActiveUser = {
    _id: string;
    username: string;
    password: string;
    email: string;
    profile: {
      name: string;
      age: number;
      height: number;
      job: string;
      education: string;
      drinking: Drinking;
      smoking: Smoking;
      starSign: StarSign;
      political: string;
      exercise: Exercise;
      religion: string;
      gender: Gender;
      bio: string;
      photos: string[];
      interests: string[];
      coreValues: string[];
      location: {
        type: string;
        city: string;
        coordinates: number[];
      };
      prompts:{prompt:Prompt, answer:string}[];
      questions: string[];
    };
    preferences: {
      preferredGenders: string | string[];
      ageRange: {
        min: number;
        max: number;
      };
      maxDistance: number;
    };
    createdAt: Date;
    lastActiveAt: Date;
  }