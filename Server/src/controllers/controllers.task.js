import {Task} from '../models/Task.js'
import {Project} from '../models/Project.js'
import { Sequelize } from 'sequelize'




export async function getTasks(req,res){
    const {projectID} = req.params 
   
    try {
        const project = await Task.findAll({
            where:{
                projectID
            },
            order: [
                [ Sequelize.col('id'), 'ASC']
            ],
        })
        console.log('pppp', project)
        res.json(project)
       
    } catch (error) {
        console.log(error)
    }
}


export async function createTask(req,res){
    
    try {
       const { projectID} = req.body
        const {name, done}= req.body
        const newTask = await Task.create({
            name,
            done,
            projectID
            
    
        })
         const project = await Project.findByPk(projectID)
          project.addTask(newTask)
          
        res.json(newTask)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}




export async function deleteTask(req,res){
const id = req.params.id


try {
    await Task.destroy({
        where:{
            id
        }
    })
    res.send("task deleted successfully")
    }

    
 catch (error) {
    res.status(500).send({message: error.message})
}

}




export async function updateTask(req,res){
    
    const id = req.params.id 
    const { name } = req.body

    try {
        const oldTask = await Task.findByPk(id)
        const AddnewTask = await oldTask.update({
         name
        })
        
        res.json(AddnewTask)
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }


}

export async function doneTask(req,res){
    const { id } = req.body

    try {
        const task = await Task.findOne({
            where:{
                id
            }
        })
        task.update({
            done : !(task.done)
        }) 
    
        res.json(task)
    } catch (error) {
        console.log(error)
    }
}