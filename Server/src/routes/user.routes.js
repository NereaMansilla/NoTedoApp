import { Router } from 'express'
import {singIn, singUp, deleteUser } from '../controllers/controllers.user.js'
import { sendMail} from '../controllers/emailer.js'
import Auth from '../Middlewares/Auth.js'
import cors from 'cors'
const router = Router()
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // for some legacy browsers
  }
router.post('/singin', cors(corsOptions), singIn)  
router.post('/register', singUp, sendMail)
router.delete('/delete', deleteUser)

export default router
