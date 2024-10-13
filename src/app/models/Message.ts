import { timeStamp } from 'console';
import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  match: mongoose.Types.ObjectId;
  sender: mongoose.Types.ObjectId;
  content: String;
  status: 'sent' | 'delivered' | 'read';
  activeAt: Date;
  matchedAt: Date;
}

const messageSchema = new Schema({
  match: {
    type: Schema.Types.ObjectId,
    ref: 'Match',
    required: true
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['sent', 'delivered', 'read'],
    required: true
  },
  timeStamp: {
    type: Date,
    default: Date.now
  }
});


const Message = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);

export default Message;