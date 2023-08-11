
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import s from './´rojectTasks.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { doneTask } from '../../Features/Tasks/getTasks';
import { deleteTask } from '../../Features/Tasks/getTasks';
import { getProjectsById } from '../../Features/getProjects/getProjects';
import { UseToken } from '../../Hooks/UseToken';
import { UseId } from '../../Hooks/UseId';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteTaskArr } from '../../Features/Tasks/getTasks';
import { getTasksProject } from '../../Features/Tasks/getTasks';
import { UseProject } from '../../Hooks/UseProject';
import { doneTaskId } from '../../Features/Tasks/getTasks';

export const ProjectsTaskCard = ({c, setInput, setTaskId}) => {
const dispatch = useDispatch()
const project = UseProject()
const loading = useSelector(state => state.tasks.loadingTasK)

    const updateCheckedTask = () =>{
        dispatch(doneTask({id:c.id}))
        dispatch(getTasksProject(project.id)) 
       
       
       } 

       const handleDelete = () =>{
        dispatch(deleteTask(c.id))
       dispatch(deleteTaskArr(c.id))
        
       }

       const handleEdit = () =>{
        setInput(true)
        setTaskId(c.id)
       }
       
      /*  if(loading) return <h1>Loading</h1> */
  return (
    <>
     <Card sx={{ maxWidth: 400, background:'#F0EBEB', marginBottom:'5vh'}}>
               <CardContent className={s.contentCardTask}>

               <Checkbox  onClick={updateCheckedTask} checked={c.done} />
                 <Typography variant='h6' sx={{paddingLeft:'50px', paddingRight: '50px'}}>
                    {c.name}
                 </Typography>
                  <ClearIcon onClick={()=>handleDelete()} sx={{ color: 'red' , cursor:'pointer'}}/>
                  <EditIcon onClick={()=>handleEdit()} sx={{color:'gray', cursor:'pointer'}} /> 
               </CardContent>
            </Card>
    </>
  )
}
