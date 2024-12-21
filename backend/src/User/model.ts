import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define User interface
export interface IUser extends Document {
  username: string;
  phoneNumber: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// User schema
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Add method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
