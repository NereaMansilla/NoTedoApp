
import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { openTaskModal } from '../Features/Tasks/getTasks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ModalTask } from '../App/ModalTask/ModalTask';

export const EmptyTask = () => {
    const dispatch = useDispatch()
     
   
    
    
    const handleModal = () =>{
        dispatch(openTaskModal(true))
        
    }
    
  return (
    <div>
   <Typography variant='h6' sx={{color:'gray', marginTop:'10%'}}>
    Parece que no tienes tareas
   </Typography>
   <Button sx={{color:'gray'}} onClick={handleModal}>Crear tarea +</Button>
   <ModalTask/>
    </div>
  )
}
