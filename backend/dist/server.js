"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./Appointment/routes"));
dotenv_1.default.config(); // Load environment variables from .env
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Connect to MongoDB
mongoose_1.default
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
// Register routes
app.use('/api/appointments', routes_1.default);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
