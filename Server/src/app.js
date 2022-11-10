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
app.use('/', router)
app.use(morgan('dev'))

/* app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type,  Authorization, Accept")
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      next();
 
}); */

/* app.use(routesProject)
app.use(taskRoutes)
app.use(userRoutes) */

export default app;