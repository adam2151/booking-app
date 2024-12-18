import mongoose, { Document, Schema } from 'mongoose';

// Define TypeScript interface for Appointment
export interface IAppointment extends Document {
  customerName: string;
  service: string;
  date: Date;
  phone: string;
}

// Define Mongoose schema for Appointment
const appointmentSchema: Schema<IAppointment> = new Schema({
  customerName: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  phone: { type: String, required: true },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;
