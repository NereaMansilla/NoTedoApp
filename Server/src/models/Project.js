import { sequelize } from "../database/database.js";
import {DataTypes} from 'sequelize'
import { Task } from "./Task.js";



export const Project = sequelize.define('projects', {
 id:{
   type: DataTypes.INTEGER,
   primaryKey:true, 
   autoIncrement: true
 }, 
 name:{
    type: DataTypes.STRING
 },
 priority:{
    type: DataTypes.STRING
 },
 description:{
    type:DataTypes.STRING
    
    
}
}, {
    timestamps:false
 })

 Project.hasMany(Task, {
    foreignKey: 'projectID',
    sourceKey: 'id'
 })

 Task.belongsTo(Project,{
    foreignKey: 'projectID',
    targetId: 'id'

 })