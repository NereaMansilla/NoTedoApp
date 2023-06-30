import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import s from './Modal.module.css'
import {useSelector} from 'react-redux'
import { setModal } from '../Features/CreateProjects/CreateProjects';
import { setModal2 } from '../Features/CreateProjects/CreateProjects';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
/* import  {newProjectCall}   from '../Features/CreateProjects/CreateProjects'; */
import { createProject } from '../Features/getProjects/getProjects.js'
/* import { getProjects } from '../Features/getProjects/getProjects.js' */
import { UseId } from '../Hooks/UseId';
/* import { UseToken } from '../Hooks/UseToken'; */
import { UseToken } from '../Hooks/UseToken';

import React from 'react'

export const Modal = () => {
  
const modal1 = useSelector(state => state.newProject.modal)
const id = UseId()
const token = UseToken()




const dispatch = useDispatch()
 const [project, setProject] = useState({
  name: '', 
  description: '' 

 }) 


const closeModal = () =>{
  dispatch(setModal(false))
  dispatch(setModal2(false))
}
 

const sendProject = (e) =>{
  e.preventDefault()
  dispatch( createProject({projectData: project, id:id, token}))
  dispatch(setModal(false))
  setProject({
    name: '', 
    description: ''
  })
}



const handleChange = (e) =>{
  setProject({
    ...project,
    [e.target.name] : e.target.value
  })
}

/* const setModalTask = () =>{
  dispatch(setModal2(true))
} */
if(modal1 === false) return null 

return(
    
    <div className={s.containerModal}>
    
    <Card sx={{ minWidth: '30vw', minHeight:'30vh',  background:'#F0EBEB'}}>

    <Button onClick={closeModal}> Close </Button>

        <CardContent>
        <form className={s.form}>

        <TextField 
        name= 'name'
         id="standard-basic"
         label="Project Name"
         variant="standard"
         value={project.name}
         onChange={handleChange} />

        <TextField 
         name= 'description'
         id="standard-basic"
         label="Add some description"
         variant="standard"
         value={project.description}
         onChange={handleChange} />

        </form>
        </CardContent>
        <Button variant="contained" onClick={sendProject } >Create</Button>

    </Card>

    </div>
  )
}

