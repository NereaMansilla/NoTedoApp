

import React from 'react'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import { UseProject } from '../../Hooks/UseProject';
import { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { openTaskModal } from '../../Features/Tasks/getTasks';
import { useDispatch } from 'react-redux';
import { createTask } from '../../Features/Tasks/getTasks';
import { getProjectsById } from '../../Features/getProjects/getProjects';
import { UseId } from '../../Hooks/UseId';
import { UseToken } from '../../Hooks/UseToken';
export const ModalTask = () => {
const project = UseProject()
const [input, setInput] = useState("")
const modal = useSelector(state => state.tasks.taskModal)
const token = UseToken()
const idUser = UseId()

const dispatch = useDispatch()

  const handleInput = (e) =>{
    setInput(e.target.value)
  }
  const handleCloseModal= () =>{
    dispatch(openTaskModal(false))
  }

  const handleSendTask = () =>{
    dispatch(createTask( {task:input,id:project.id} ) ) 
    dispatch(openTaskModal(false))
  
   
  }
   if(modal === false) return null 
  return (
    <div>
      <TextField onChange={(e)=>handleInput(e)} id="standard-basic" label="" variant="standard" />
      <DoneIcon onClick={handleSendTask} color="success" sx={{cursor:"pointer"}} />
      <CloseIcon onClick={handleCloseModal} sx={{color:"red", cursor:"pointer"}} />
    </div>
  )
}
 

/* FALTA 

DELETE DE TASK 
UPDATE DE TASK 
TERMINAR CSS
RUTA RECUPERACION DE CONTRASEÑA */