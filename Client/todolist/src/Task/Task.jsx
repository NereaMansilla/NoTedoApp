import React from 'react'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import { EmptyTask } from '../EmptyTask/EmptyTask';
import Button from '@mui/material/Button';
import s from './Task.module.css'
import { NavLink } from 'react-router-dom';
import { ProjectsTasks } from '../App/ProjectsTasks/ProjectsTasks';
import { UseProject } from '../Hooks/UseProject';
export const Task = () => {
 
  
  
 const loading = useSelector(state => state.projects.loadingProjectId)
const project = UseProject()



 /*  if(loading) return <h1>Loading...</h1> */
  return (
    <>
 
       <div className={s.btnContainer}>
        <NavLink to='/projects'>
 <Button>Back</Button>
        </NavLink>
      </div>
         <Typography variant="h3" gutterBottom>
             {project.name}
         </Typography>
         <Typography variant="h5" gutterBottom>
            {project.description}
         </Typography>
         
          { project.tasks.length === 0 ? <EmptyTask/> : <ProjectsTasks/> }
          
         
    </>
  )
}
