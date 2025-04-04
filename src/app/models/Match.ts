import mongoose, { Document, Schema } from 'mongoose';

export interface IMatch extends Document {
  matcher: mongoose.Types.ObjectId;
  matcherInteractionType: 'like' | 'superlike' | 'turbo';
  matchee: mongoose.Types.ObjectId;
  matcheeInteractionType: 'like' | 'superlike' | 'turbo';
  status: 'matched' | 'unmatched' | 'block';
  activeAt: Date;
  matchedAt: Date;
}

const matchSchema = new Schema({
  matcher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  matcherInteractionType: {
    type: String,
    enum: ['like', 'superlike', 'turbo'],
    required: true
  },
  matcheeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  matcheeInteractionType: {
    type: String,
    enum: ['like', 'superlike', 'turbo'],
    required: true
  },
  type: {
    type: String,
    enum: ['classic', 'spark'],
    required: true
  },
  status: {
    type: String,
    enum: ['matched', 'unmatched', 'block'],
    required: true
  },
  activeAt: {
    type: Date,
    default: Date.now
  },
  matchedAt: {
    type: Date,
    default: Date.now
  }
});


const Match = mongoose.models.Match || mongoose.model<IMatch>('Match', matchSchema);

export default Match;