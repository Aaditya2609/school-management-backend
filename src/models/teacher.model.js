import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subject: { type: String, required: true },
    contact: {
        email: { type: String },
        phone: { type: String },
    }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export { Teacher }