import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Project } from './Project.js'


export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
         isAlpha:{
            msg: "the name must be contain only letters"
         }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail:{
                msg: "Email not valid"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false, 
       
    }
})

User.hasMany(Project, {
    foreignKey: 'userID',
    sourceKey: 'id'
 })

 Project.belongsTo(User,{
    foreignKey: 'userID',
    targetId: 'id'

 })