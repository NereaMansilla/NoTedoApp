import { Router } from "express";
import {  createTask, deleteTask, updateTask} from "../controllers/controllers.task.js";

const router = Router()


router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)


export default router