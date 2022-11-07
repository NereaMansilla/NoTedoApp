import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const password = process.env.PASSWORD
const user = process.env.USER
const host = process.env.HOST

export const sequelize = new Sequelize(
'projectDB', `${user}`, `${password}`,{
host: `${host}`,
dialect: 'postgres',
logging:false
})