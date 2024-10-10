import mongoose, { Document, Schema } from 'mongoose';
import { report } from 'process';

export interface IReport extends Document {
  reporter: mongoose.Types.ObjectId;
  reportedUser: mongoose.Types.ObjectId;
  reportType: Number;
  reason: String;
  status: String;
  createdAt: Date;
}

const reportSchema = new Schema({
  reporter: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportedUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportType: {
    type: Number,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'resolved', 'rejected'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now 
  }
});


const Report = mongoose.models.Report || mongoose.model<IReport>('Report', reportSchema);

export default Report;