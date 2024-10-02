import mongoose from 'mongoose';
const { Schema } = mongoose;

const todoSchema = new Schema({
  data: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the model
export const Todo = mongoose.model('todos', todoSchema);
