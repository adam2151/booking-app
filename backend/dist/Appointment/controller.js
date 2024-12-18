"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const manager_1 = __importDefault(require("./manager"));
class AppointmentController {
    // Create a new appointment
    createAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointment = yield manager_1.default.create(req.body);
                res.status(201).json(appointment);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: 'An unexpected error occurred' });
                }
            }
        });
    }
    // Get all appointments
    getAllAppointments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointments = yield manager_1.default.getAll();
                res.status(200).json(appointments);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'An unexpected error occurred' });
                }
            }
        });
    }
    // Get an appointment by ID
    getAppointmentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointment = yield manager_1.default.getById(req.params.id);
                if (!appointment) {
                    res.status(404).json({ message: "Appointment not found" });
                }
                else {
                    res.status(200).json(appointment);
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'An unexpected error occurred' });
                }
            }
        });
    }
    // Delete an appointment
    deleteAppointment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const appointment = yield manager_1.default.delete(req.params.id);
                if (!appointment) {
                    res.status(404).json({ message: "Appointment not found" });
                }
                else {
                    res.status(200).json({ message: "Appointment deleted" });
                }
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ message: error.message });
                }
                else {
                    res.status(500).json({ message: 'An unexpected error occurred' });
                }
            }
        });
    }
}
exports.default = new AppointmentController();
