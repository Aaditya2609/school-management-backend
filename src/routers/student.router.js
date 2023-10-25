import express from "express";
import { addStudent, deleteStudent, getStudents, updateStudent } from "../controllers/student.controller";

const router=express.Router()
router.route("/").get(getStudents)
router.route("/").post(addStudent)
router.route("/:id").delete(deleteStudent)
router.route("/update/:id").post(updateStudent);

export {router};