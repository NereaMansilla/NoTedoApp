
import app from './app.js'
import * as dotenv from 'dotenv'
import { sequelize } from './database/database.js'
dotenv.config({ path: './.env' })
const port = process.env.PORT | 3001
/* var cors = require('cors') */
import cors from 'cors'


/* app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}); */

async function main() {
    try {
        await sequelize.sync({ force: false })
        app.listen(port, () => {
            console.log(`server listening on port ${port}`)
        })

    } catch (error) {
        console.log('Unable to connect to database ', error)
    }
}

main()




