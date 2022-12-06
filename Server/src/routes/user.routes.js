import { Router } from 'express'
import {singIn, singUp, deleteUser } from '../controllers/controllers.user.js'
import { sendMail} from '../controllers/emailer.js'
import Auth from '../Middlewares/Auth.js'
import cors from 'cors'
const router = Router()

router.post('/singin', singIn)  
router.post('/register', singUp, sendMail)
router.delete('/delete', deleteUser)

export default router
