import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  profile: {
    name: string;
    age: number;
    gender: string;
    height: number;
    photos: string[];
    interests: string[];
    location: {
      type: 'Point';
      coordinates: number[];
    };
  };
  dateContent?: ContentBlock;
  relationContent?: ContentBlock;
  friendContent?: ContentBlock;
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

interface ContentBlock {
  bio: string;
  promptSet: { prompt: mongoose.Types.ObjectId; answer: string }[];
  ask: string;
}

const contentBlockSchema: Schema = new Schema({
  bio: { type: String },
  promptSet: [{
    prompt: { type: Schema.Types.ObjectId, ref: 'Prompt' },
    answer: { type: String }
  }],
  ask: { type: String }
});

const userSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: {
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    height: { type: Number },
    photos: [{ type: String }],
    interests: [{ type: String }],
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] }
    }
  },
  dateContent: contentBlockSchema,
  relationContent: contentBlockSchema,
  friendContent: contentBlockSchema,
  preferences: {
    preferredGenders: { type: [String], default: [] },
    ageRange: {
      min: { type: Number, default: 18 },
      max: { type: Number, default: 100 }
    },
    maxDistance: { type: Number, default: 100 }
  },
  createdAt: { type: Date, default: Date.now },
  lastActiveAt: { type: Date, default: Date.now }
}, {
  timestamps: { createdAt: 'createdAt', updatedAt: 'lastActiveAt' }
});

// 創建地理空間索引
userSchema.index({ 'profile.location': '2dsphere' });

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
