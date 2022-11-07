import { Router } from "express";
import { getProjects, createProject, deleteProject,getProjectsById, updateProject} from '../controllers/controllers.project.js'
import Auth from '../Middlewares/Auth.js'
const router = Router()

router.get('/', Auth,  getProjects)
router.post('/', createProject)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)
router.get('/:id', getProjectsById)



export default router