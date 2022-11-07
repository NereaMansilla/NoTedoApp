import Router from 'express'

import User from './user.routes.js'
import Project from './project.routes.js'
import Task from './task.routes.js'

const router = Router()

router.use('/user', User)
router.use('/project', Project)
router.use('/task', Task)

export default router