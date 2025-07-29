import mongoose from 'mongoose';

const entrySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  }
});

export default mongoose.model('Entry', entrySchema);