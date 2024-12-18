import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './Appointment/routes';

dotenv.config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Register routes
app.use('/api/appointments', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
