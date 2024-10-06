import mongoose, { Document, Schema } from 'mongoose';

export interface IInteraction extends Document {
  swiperId: mongoose.Types.ObjectId;
  swipeeId: mongoose.Types.ObjectId;
  type: 'like' | 'dislike' | 'block' | 'superlike';
  timestamp: Date;
}

const interavtionSchema = new Schema({
  swiperId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  swipeeId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['like', 'dislike','bolck', 'superlike'],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now 
  }
});


const Interaction = mongoose.model<IInteraction>('Interaction', interavtionSchema);

export default Interaction;