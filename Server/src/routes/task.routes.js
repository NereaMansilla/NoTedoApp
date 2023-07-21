import { Router } from "express";
import {  createTask, deleteTask, updateTask, doneTask,getTasks} from "../controllers/controllers.task.js";

const router = Router()

router.get('/:projectID', getTasks)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)
router.put('/', doneTask)


export default router