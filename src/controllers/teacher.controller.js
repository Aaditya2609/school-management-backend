import { Teacher } from "../models/teacher.model";

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const deletedTeacher = await Teacher.findByIdAndRemove(teacherId);

        if (!deletedTeacher) {
            return res.status(404).json({ error: 'Teacher not found' });
        }

        res.status(200).json({ message: 'Teacher deleted successfully', Teacher: deletedTeacher });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

const updateTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;
        const updatedTeacherData = req.body;
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherId,
            updatedTeacherData,
            { new: true }
        );

        if (!updatedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.status(200).json(updatedTeacher);
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const addTeacher = async (req, res) => {
    try {
        const { name, subject, contact } = req.body;
        const teacher = new Teacher({ name, subject, contact });
        await teacher.save();
        res.status(201).json(teacher);
    }
    catch (e) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
export {addTeacher,deleteTeacher,getTeachers,updateTeacher}