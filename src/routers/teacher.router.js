import express from "express";
import { addTeacher, deleteTeacher, getTeachers, updateTeacher } from "../controllers/teacher.controller";
const router = express.Router()
router.route("/").get(getTeachers)
router.route("/").post(addTeacher)
router.route("/:id").delete(deleteTeacher)
router.route("/update/:id").post(updateTeacher);

export { router };