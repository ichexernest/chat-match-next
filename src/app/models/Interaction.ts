import mongoose, { Document, Schema } from 'mongoose';

export interface IInteraction extends Document {
  swiper: mongoose.Types.ObjectId;
  swipee: mongoose.Types.ObjectId;
  type: 'like' | 'dislike' | 'block' | 'superlike' | 'turbo';
  createdAt: Date;
}

const interactionSchema = new Schema({
  swiper: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  swipee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['classic', 'spark'],
    required: true
  },
  status: {
    type: String,
    enum: ['like', 'dislike', 'superlike', 'block', 'turbo'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});

const Interaction =mongoose.models.Interaction || mongoose.model<IInteraction>('Interaction', interactionSchema);

export default Interaction;