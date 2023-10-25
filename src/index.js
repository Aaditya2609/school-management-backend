import express, { urlencoded } from 'express';
import { router as studentRouter } from "./routers/student.router"
import { router as teacherRouter } from "./routers/teacher.router"
import { router as classesRouter } from "./routers/classes.router"

import cors from "cors";
import * as dotenv from "dotenv";
import { initializeDatabase } from './db/db.connection';
dotenv.config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(urlencoded({ extended: true }));
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE"]
}));

initializeDatabase();
const port = process.env.port || 3000;

app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/class", classesRouter);

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});


app.listen(port, () =>
    console.log('Example app listening on port', port),
);