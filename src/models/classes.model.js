import mongoose from "mongoose";
const classSchema = mongoose.Schema({
    name: { type: String, required: true },
    teacher: { type: String },
})
const Classes = mongoose.model('Classes', classSchema);
export {Classes}