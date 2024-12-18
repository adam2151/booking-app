import Appointment from './model';
import { IAppointment } from './model';

class AppointmentRepository {
  // Create a new appointment
  public async createAppointment(data: IAppointment): Promise<IAppointment> {
    const appointment = new Appointment(data);
    return await appointment.save();
  }

  // Get all appointments
  public async getAllAppointments(): Promise<IAppointment[]> {
    return await Appointment.find();
  }

  // Get an appointment by ID
  public async getAppointmentById(id: string): Promise<IAppointment | null> {
    return await Appointment.findById(id);
  }

  // Delete an appointment by ID
  public async deleteAppointmentById(id: string): Promise<IAppointment | null> {
    return await Appointment.findByIdAndDelete(id);
  }
}

export default new AppointmentRepository();
