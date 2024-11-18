export type ActiveUser = {
    _id: string;
    username: string;
    password: string;
    email: string;
    profile: {
      name: string;
      age: number;
      gender: string;
      bio: string;
      photos: string[];
      interests: string[];
      location: {
        type: string;
        coordinates: number[];
      };
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