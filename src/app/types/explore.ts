export type ExploreItem = {
    id: string;
    name: string;
    age: number;
    gender: string;
    bio: string;
    photos: string[];
    interests: string[];
    location: {
        type: string;
        coordinates: number[];
    }
    
}
