import {Task} from '../models/Task.js'
import {Project} from '../models/Project.js'



export async function createTask(req,res){
    try {
       const { projectID} = req.body
        const {name, done}= req.body
        const newTask = await Task.create({
            name,
            done,
            
    
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
console.log(id)

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

    try {
        const oldTask = await Task.findByPk(id)
        oldTask.set(req.body)
    
        await oldTask.save()
        res.json(oldTask)
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }


}