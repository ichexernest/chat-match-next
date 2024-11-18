import mongoose, { Document, Schema } from 'mongoose';

export interface IPrompt extends Document {
  type: string;
  content: string;
}

const promptSchema = new Schema({
  type: {
    type: String,
    enum: ['Vibe', 'Spark', 'Action'],
    required: true
  },
  matcherInteractionType: {
    type: String,
    required: true
  },
});


const Prompt = mongoose.models.Prompt || mongoose.model<IPrompt>('Prompt', promptSchema);

export default Prompt;