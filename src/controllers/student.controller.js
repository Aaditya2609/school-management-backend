import { Student } from "../models/student.model";

const getStudents = async (req, res) => {
    try {
      const students = await Student.find().populate('classId'); 
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  

const addStudent = async (req, res) => {
    try {
        const { name, age, grade, gender, attendance, marks, classId} = req.body;
        const student = new Student({ name, age, grade, gender, attendance, marks, classId });
        await student.save();
        res.status(201).json(student);
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const updateStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const updatedStudentData = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            updatedStudentData,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(updatedStudent);
    }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const deleteStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const deletedStudent = await Student.findByIdAndRemove(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export{addStudent,getStudents,deleteStudent,updateStudent}