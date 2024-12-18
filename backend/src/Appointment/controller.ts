import { Request, Response } from 'express';
import appointmentManager from './manager';

class AppointmentController {
  // Create a new appointment
  public async createAppointment(req: Request, res: Response): Promise<void> {
    try {
      const appointment = await appointmentManager.create(req.body);
      res.status(201).json(appointment);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'An unexpected error occurred' });
      }
    }
  }

  // Get all appointments
  public async getAllAppointments(req: Request, res: Response): Promise<void> {
    try {
      const appointments = await appointmentManager.getAll();
      res.status(200).json(appointments);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  }

  // Get an appointment by ID
  public async getAppointmentById(req: Request, res: Response): Promise<void> {
    try {
      const appointment = await appointmentManager.getById(req.params.id);
      if (!appointment) {
        res.status(404).json({ message: "Appointment not found" });
      } else {
        res.status(200).json(appointment);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  }

  // Delete an appointment
  public async deleteAppointment(req: Request, res: Response): Promise<void> {
    try {
      const appointment = await appointmentManager.delete(req.params.id);
      if (!appointment) {
        res.status(404).json({ message: "Appointment not found" });
      } else {
        res.status(200).json({ message: "Appointment deleted" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  }
}

export default new AppointmentController();
