import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config({ path: './.env' })


const url_local = process.env.CONNECTION_DATABASE_LOCAL
const url_remote = process.env.CONNECTION_DATABASE_REMOTE

export const sequelize = new Sequelize(
`${url_remote}`,{
logging:false,


})


