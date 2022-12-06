
import React from 'react'
import {ReactReduxContext, useSelector} from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { setModal2 } from '../Features/CreateProjects/CreateProjects';
import { ModalTask } from './ModalTask';
import { setModal3 } from '../Features/CreateProjects/CreateProjects';
import s from './Modal.module.css'

export const AllTaskModal = () => {

   const task = useSelector(state => state.newProject.seeTasks)
   const project = useSelector(state=> state.projects)
   const tasks = useSelector(state => state.tasks)
   console.log('tasks!!!', tasks.tasks)

   const dispatch = useDispatch()
   

   const setModalTask = (event) =>{
    dispatch(setModal2(true))
    console.log(project.projects)
   
  }

  const closeModal = () =>{
    dispatch(setModal3(false))
  }
 


    if(task === false) return null
  return (
    <div className={s.containerCardTask}>
   <Card sx={{ minWidth: '30vw', minHeight:'30vh',  background:'#F0EBEB'}}>
    <div onClick={closeModal}>x</div>
    <CardContent>
        {
            
        tasks.tasks.map((c)=>{
       return <h3 key={c.id}>{c.name}</h3>
})
                
                
        }




    </CardContent>
    <Button variant="outlined" onClick={setModalTask}>Add task</Button>
    <div className={s.inputTaskContainer} >
    <ModalTask/>

    </div>
   </Card>
    </div>
  )
}
