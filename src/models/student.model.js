import mongoose from "mongoose";
import { Classes } from "./classes.model";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    attendance: { type: Number,},
    marks: { type: Number },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Classes', required: true },
});

const Student = mongoose.model("Student", studentSchema);


export {Student};