import { Classes } from "../models/classes.model";
const getClasses=async(req,res)=>{
    try {
        const classes = await Classes.find();
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
export{getClasses}