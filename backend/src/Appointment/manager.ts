import { IAppointment } from './model';
import appointmentRepository from './repository';

class AppointmentManager {
  // Create a new appointment
  public async create(data: IAppointment): Promise<IAppointment> {
    // Here, you can add validation or other business logic
    if (!data.customerName || !data.service || !data.phone) {
      throw new Error("Missing required fields");
    }
    return await appointmentRepository.createAppointment(data);
  }

  // Get all appointments
  public async getAll(): Promise<IAppointment[]> {
    return await appointmentRepository.getAllAppointments();
  }

  // Get a specific appointment
  public async getById(id: string): Promise<IAppointment | null> {
    return await appointmentRepository.getAppointmentById(id);
  }

  // Delete an appointment
  public async delete(id: string): Promise<IAppointment | null> {
    return await appointmentRepository.deleteAppointmentById(id);
  }
}

export default new AppointmentManager();
