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
const repository_1 = __importDefault(require("./repository"));
class AppointmentManager {
    // Create a new appointment
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // Here, you can add validation or other business logic
            if (!data.customerName || !data.service || !data.phone) {
                throw new Error("Missing required fields");
            }
            return yield repository_1.default.createAppointment(data);
        });
    }
    // Get all appointments
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository_1.default.getAllAppointments();
        });
    }
    // Get a specific appointment
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository_1.default.getAppointmentById(id);
        });
    }
    // Delete an appointment
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield repository_1.default.deleteAppointmentById(id);
        });
    }
}
exports.default = new AppointmentManager();
