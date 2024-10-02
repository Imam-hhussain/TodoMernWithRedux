import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tododb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
