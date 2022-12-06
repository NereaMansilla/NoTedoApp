
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TextField from '@mui/material/TextField';
import s from './Modal.module.css'
import { setModal2 } from '../Features/CreateProjects/CreateProjects';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  {createTask}  from '../Features/Tasks/getTasks';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react'

export const ModalTask = () => {
    const modal2 = useSelector(state => state.newProject.modal2)
    const tasksID = useSelector(state => state.tasks.tasks.map((c)=> c.projectID))
    console.log('task id', tasksID[0])
    const taskid = tasksID[0]
    const dispatch = useDispatch()
    const [task, setTask] = useState({
      name: ''
    })

    

    const handleInputTask = (e) =>{
      setTask({
        ...task, 
        [e.target.name] : e.target.value
      })
    }


    const sendTask = () =>{
      dispatch(createTask({task: task, id: taskid}))
    }
   
    if(modal2 === false) return null

    const closeInputTask = () =>{
      dispatch(setModal2(false))
    }

  return (

    <div className={s.modal2}>
        <Card sx={{background: '#F0EBEB'}}>
         <CardContent className={s.modal2Content}>
        <form>

        <TextField 
        name= 'name'
         id="standard-basic"
         label="add task"
         variant="standard"
         onChange={handleInputTask}
         />

        </form>
       <CloseIcon onClick={closeInputTask}/>
        <CheckIcon onClick={sendTask}/>
        </CardContent>
        </Card>
    </div>

  )
}
