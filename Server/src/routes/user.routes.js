import { Router } from 'express'
import {singIn, singUp, deleteUser, verifyUserExist, updatePassword} from '../controllers/controllers.user.js'
import { sendMail, emailRecover} from '../controllers/emailer.js'
import Auth from '../Middlewares/Auth.js'
import cors from 'cors'
const router = Router()

router.post('/singin', singIn)  
router.post('/register', singUp, sendMail)
router.post('/verify', verifyUserExist, emailRecover)
router.delete('/delete', deleteUser)
router.put('/recoverPassword', updatePassword)

export default router
