import express from 'express';
import appointmentController from './controller';

const router = express.Router();

router.post('/', appointmentController.createAppointment); // Create appointment
router.get('/', appointmentController.getAllAppointments); // Get all appointments
router.get('/:id', appointmentController.getAppointmentById); // Get appointment by ID
router.delete('/:id', appointmentController.deleteAppointment); // Delete appointment

export default router;
