import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
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

const userSchema: Schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profile: {
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String },
    bio: { type: String },
    photos: [{ type: String }],
    interests: [{ type: String }],
    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] }
    }
  },
  preferences: {
    preferredGenders: { type: Schema.Types.Mixed }, // 可以是字符串或字符串數組
    ageRange: {
      min: { type: Number, default: 18 },
      max: { type: Number, default: 100 }
    },
    maxDistance: { type: Number, default: 100 } // 默認100公里或哩
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