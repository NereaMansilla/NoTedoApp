

import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch} from 'react-redux'
import {deleteProject} from '../Features/getProjects/getProjects'
import { useSelector } from 'react-redux';
import {setModalEdit} from '../Features/CreateProjects/CreateProjects'
import { getIdProject } from '../Features/CreateProjects/CreateProjects';
import { UseToken } from '../Hooks/UseToken';
import { UseId } from '../Hooks/UseId';
import { getProjectsById } from '../Features/getProjects/getProjects';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import s from './Card.module.css'




export const ProjectCard = ({ project }) => {
 
  const dispatch = useDispatch()
  const token = UseToken()
  const idUser = UseId()
  const navigate = useNavigate()
  

  const deleteSearch = () =>{
    dispatch(deleteProject({project,token}))
  
  }

  const editProject = (id) =>{
   dispatch(setModalEdit(true)) 
  dispatch(getProjectsById({token,idUser,id})) 

  }

  const handleTask = (id) =>{
    
    dispatch(getProjectsById({token,idUser,id})) 
    
    
  }

  
  return (
   
        <div>
          
       
        <Card sx={{ maxWidth: 340, background:'#F0EBEB', marginBottom:'5vh'}}>
            <CardContent className={s.cardContent}>
              <NavLink to={`/Task/${project.name}`} style= { { textDecoration: 'none', color:'black' }} >
                <Typography className={s.text}  onClick={()=>handleTask(project.id)}  gutterBottom variant="h5" component="div" sx={{cursor:'pointer'}}>
               {project.name}
                </Typography>
              </NavLink>
                <Typography gutterBottom variant="h6" component="div">
             {project.description}
                </Typography>

            </CardContent>
            <Button size="small" onClick={()=>editProject(project.id)}>Edit <EditIcon/> </Button>
            <Button size="small" onClick={deleteSearch}>Delete <DeleteIcon/> </Button>
        </Card>
      
        </div>


     
      
     

 
  )
}

