import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const password = process.env.PASSWORD
const user = process.env.USER
const host = process.env.HOST
const dialect = process.env.DIALECT
const name = process.env.DATABASE_NAME

export const sequelize = new Sequelize(
`${name}`, `${user}`, `${password}`,{
host: `${host}`,
dialect: `${dialect}`,
logging:false
})