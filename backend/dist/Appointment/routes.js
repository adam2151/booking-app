"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
router.post('/', controller_1.default.createAppointment); // Create appointment
router.get('/', controller_1.default.getAllAppointments); // Get all appointments
router.get('/:id', controller_1.default.getAppointmentById); // Get appointment by ID
router.delete('/:id', controller_1.default.deleteAppointment); // Delete appointment
exports.default = router;
