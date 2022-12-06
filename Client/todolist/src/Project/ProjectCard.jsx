

import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch} from 'react-redux'
import {deleteProject} from '../Features/getProjects/getProjects'
import { setModal3 } from '../Features/CreateProjects/CreateProjects';
import { getTask } from '../Features/Tasks/getTasks';
import s from './Card.module.css'




export const ProjectCard = ({ project }) => {

 
  const dispatch = useDispatch()
  
  const seeTask = () =>{
    dispatch(setModal3(true))
    dispatch(getTask(project.tasks))

    
  }
  
  

  const deleteSearch = () =>{
    dispatch(deleteProject(project))
  
  }
  return (
        <div>
          

        <Card onClick={seeTask} sx={{ maxWidth: 340, background:'#F0EBEB', marginBottom:'5vh'}}>
            <CardContent className={s.cardContent}>
                <Typography  gutterBottom variant="h5" component="div">
               {project.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
             {project.description}
                </Typography>

            </CardContent>
            <Button size="small">Edit <EditIcon/> </Button>
            <Button size="small" onClick={deleteSearch}>Delete <DeleteIcon/> </Button>
        </Card>
        {/* <div className={s.modelTask}>

        <AllTaskModal/>
        </div> */}
        </div>
     
      
     

 
  )
}

