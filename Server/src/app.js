import express /* { urlencoded } */ from 'express'
/* import routesProject from './routes/project.routes.js'
import taskRoutes from './routes/task.routes.js'
import userRoutes from './routes/user.routes.js' */
import router from './routes/index.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
app.use(cors({
  origin: "*"
}))
app.use(express.json())
/* app.use(urlencoded()) */
app.use( router)
app.use(morgan('dev'))



export default app;