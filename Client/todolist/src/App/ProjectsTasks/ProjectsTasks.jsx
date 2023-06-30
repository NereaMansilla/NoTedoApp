

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

export const ProjectsTasks = () => {
    const project = UseProject()
    const dispatch = useDispatch()
    const idUser = UseId()
    const token = UseToken()
    const loading = useSelector(state => state.projects.loadingProjectId)
    const [input,setInput] = useState(false)
    const [taskId,setTaskId]= useState(false)
    const [ChangeTask, setChangeTask] = useState('')

    const handleOpenTaskModal = () =>{
        dispatch(openTaskModal(true))
     }

     const handleDelete = (id) =>{
      dispatch(deleteTask(id))
      dispatch(getProjectsById({token,idUser,id:project.id}))
     }

     const handleEdit = (id) =>{
      setInput(true)
      setTaskId(id)
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
      setInput(false)
      setTaskId(false)
      dispatch(getProjectsById({token,idUser,id:project.id}))
     }
     if(loading) return <LoadingCards/>
  return (
    <>
    {project.tasks?.map((c)=>(
      <div key={c.id}>
            {c.id === taskId ? 
            <>
            <Card sx={{ maxWidth: 340, background:'#F0EBEB', marginBottom:'5vh'}}>
            <CardContent>
               <input onChange={(e)=>handleInputValue(e)} type='text' defaultValue={c.name}/>
               <ClearIcon onClick={handleCloseInput} sx={{ color: 'red' , cursor:'pointer'}}/>
               <DoneIcon color="success" sx={{cursor:"pointer"}} onClick={()=>sendTask(c.id)}/>
            </CardContent>
            </Card>
            </>
                : 

            <Card sx={{ maxWidth: 340, background:'#F0EBEB', marginBottom:'5vh'}}>
               <CardContent>
                <h1>{c.name}</h1> 
                  <ClearIcon onClick={()=>handleDelete(c.id)} sx={{ color: 'red' , cursor:'pointer'}}/>
                  <EditIcon onClick={()=>handleEdit(c.id)} sx={{color:'gray', cursor:'pointer'}} /> 
               </CardContent>
            </Card>
}
            </div>
            ))}
            
            <ModalTask/>

 <Button sx={{color:'gray'}} onClick={handleOpenTaskModal}>Crear tarea +</Button> 
    </>
  )
}
