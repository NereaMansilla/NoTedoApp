

import React from 'react'
import { UseProject } from '../../Hooks/UseProject'
import { ModalTask } from '../ModalTask/ModalTask'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { openTaskModal } from '../../Features/Tasks/getTasks';
import ClearIcon from '@mui/icons-material/Clear';
import { deleteTask } from '../../Features/Tasks/getTasks';
import { getProjectsById } from '../../Features/getProjects/getProjects';
import { UseId } from '../../Hooks/UseId';
import { UseToken } from '../../Hooks/UseToken';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { LoadingCards } from '../../Loading/LoadingCards';
import { updateTask } from '../../Features/Tasks/getTasks';
import DoneIcon from '@mui/icons-material/Done';
import Checkbox from '@mui/material/Checkbox';
import { doneTask } from '../../Features/Tasks/getTasks';
import s from './´rojectTasks.module.css'
import Typography from '@mui/material/Typography';
import { ProjectsTaskCard } from './ProjectsTaskCard';
import { getTasksProject } from '../../Features/Tasks/getTasks';


export const ProjectsTasks = () => {
    const project = UseProject()
    const dispatch = useDispatch()
    const idUser = UseId()
    const token = UseToken()
    const loading = useSelector(state => state.projects.loadingProjectId)
    const loadingCreate = useSelector(state => state.tasks.loadingCreate)
    const loading2 = useSelector(state => state.tasks.loadingTasK)
    const [input,setInput] = useState(false)
    const [taskId,setTaskId]= useState(false)
    const [ChangeTask, setChangeTask] = useState('')
    const tasks = useSelector(state => state.tasks.tasksProject)
    
    
    

 
    const handleOpenTaskModal = () =>{
        dispatch(openTaskModal(true))
     }

     const handleInputValue = (e) =>{
      setChangeTask(e.target.value)
     }

     const handleCloseInput = () =>{
      setInput(false)
      setTaskId(false)
      
     }
    
      const sendTask = (id) =>{
      dispatch(updateTask({id,ChangeTask}))
      dispatch(getTasksProject(project.id))
      setInput(false)
      setTaskId(false)
     }

     if(loadingCreate || loading2) return <LoadingCards/>
  return (
    <>
    {tasks?.map((c)=>(
      <div key={c.id} className={s.containerTaskCard}>
            {c.id === taskId ? 
            
            <Card sx={{ maxWidth: 400, background:'#F0EBEB', marginBottom:'5vh'}}>
            <CardContent>
               <input onChange={(e)=>handleInputValue(e)} type='text' defaultValue={c.name}/>
               <ClearIcon onClick={handleCloseInput} sx={{ color: 'red' , cursor:'pointer'}}/>
               <DoneIcon color="success" sx={{cursor:"pointer"}} onClick={()=>sendTask(c.id)}/>
            </CardContent>
            </Card>
           
                : 

                <ProjectsTaskCard c={c} setInput={setInput} setTaskId={setTaskId}/>
}
            </div>
            ))}
            
            <ModalTask/>

 <Button sx={{color:'gray'}} onClick={handleOpenTaskModal}>Crear tarea +</Button> 
    </>
  )
}
