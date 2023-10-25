import express from "express";
import { getClasses } from "../controllers/classes.controller";

const router=express.Router()
router.route("/").get(getClasses)
export{router}