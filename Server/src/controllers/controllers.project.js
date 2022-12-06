import { Project } from '../models/Project.js'
import { Task } from '../models/Task.js'
import {User } from '../models/User.js'

//bring me all the projects that belongs to user 
export async function getProjects(req, res) {
 const {userID} = req.params
 console.log('userID', userID)
    try {
        const projects = await Project.findAll({
            where:{
                userID
            }, 
            include: Task
        })
   
    res.json(projects)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
//GET USER PROJECTS 

export async function createProject(req, res) {
    //see if i have to pass the userID by body or param (from front)
    //remeber put the priority from body too
    const {userID } = req.body
    const { name, description} = req.body
    try {
    
        const newProject = await Project.create(
            {
                name,
                description, 
                userID
                
             
            }
        )
        const user = await User.findByPk(userID) // find the user
        user.addProject(newProject) //put to the user the new proyect created
       

        res.json(newProject)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


export async function updateProject(req, res) {
    const { id } = req.params
    const {userID} = req.body
    const { name, priority, description } = req.body

    try {
        const projectUpdated = await Project.findOne({
            where:{
                userID,
                id
            }
        })
        const update = await projectUpdated.update({
            name,
            priority ,
            description
        })
        res.json(update)
  
 
    } catch (error) {
        res.status(500).send({ message: error.message })
    }


}

export async function deleteProject(req, res) {
    const id = req.params.id
    const userID = req.params.userID

    try {
        await Project.destroy({
            where: {
                id,
                userID
            }
        })

        const projectNoDelete = await Project.findAll({
            where:{
                userID
            }
        })
        res.send(projectNoDelete)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


export async function getProjectsById(req, res) {
    const id = req.params.id
    const {userID} = req.body
    try {
        const project = await Project.findOne({
            where: {
                id: id,
                userID
            }, 
            include: Task 
        })
        project === null ? res.status(404).send({ message: 'project does not exists' }) :
            res.json(project)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

