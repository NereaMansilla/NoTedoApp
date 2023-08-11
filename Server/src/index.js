
import app from './app.js'
import * as dotenv from 'dotenv'
import { sequelize } from './database/database.js'
dotenv.config({ path: './.env' })
const port = process.env.PORT | 3001
import cors from 'cors'



async function main() {
    try {
        await sequelize.sync({ force:false })
        app.listen(port, () => {
            console.log(`server listening on port ${port}`)
        })

    } catch (error) {
        console.log('Unable to connect to database :( ', error)
    }
}

main()




