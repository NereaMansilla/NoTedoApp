import { Router } from "express";
import { getProjects, createProject, deleteProject, updateProject, ProjectById} from '../controllers/controllers.project.js'

import Auth from '../Middlewares/Auth.js'
const router = Router()


 
router.get('/:userID', Auth,  getProjects)
 router.get('/:userID/:id', Auth, ProjectById)
 router.post('/', Auth, createProject)
 router.put('/:userID/:id', Auth, updateProject)
 router.delete('/:userID/:id', Auth, deleteProject)




export default router