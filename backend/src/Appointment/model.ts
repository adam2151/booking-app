import mongoose, { Document, Schema } from 'mongoose';
import { GroomingOption } from './enums';

export interface IAppointment extends Document {
  customerName: string;
  service: GroomingOption;
  date: Date;
  phone: string;
}

const appointmentSchema: Schema<IAppointment> = new Schema({
  customerName: { type: String, required: true },
  date: { type: Date, required: true },
  service: { 
    type: String, 
    enum: Object.values(GroomingOption),
    required: true 
  },
  phone: { type: String, required: true },
}, {
  timestamps: true,
});

const Appointment = mongoose.model<IAppointment>('Appointment', appointmentSchema);

export default Appointment;
