
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useSelector} from 'react-redux'
import s from './EditProject.module.css'
import { setModalEdit } from '../Features/CreateProjects/CreateProjects';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Loading } from '../Loading/Loading';
import { updateProject } from '../Features/getProjects/getProjects';
import { UseToken } from '../Hooks/UseToken';
import { UseId } from '../Hooks/UseId';




export const EditProject = () => {
const edit = useSelector(state => state.newProject.modalEdit)
const project = useSelector(state => state.projects.projectById )
const loading = useSelector(state => state.projects.loadingProjectId )
const dispatch = useDispatch()
const token = UseToken()
const idUser = UseId()

const [projectState, setProjectState]= useState('')


 useEffect(()=>{
loading ?  setProjectState({
  name:'',
  description:''
}) :
 setProjectState({
  name:project.name,
  description:project.description
})
},[project.name,project.description, loading])  


const closeEditModal = () =>{
    dispatch(setModalEdit(false))
}

const hanldeInput = (e) =>{
  setProjectState({
    ...projectState,
  [e.target.name] : e.target.value
  })
}


const sendUpdate = (id) =>{
 dispatch(updateProject(({id,idUser,token,projectState})))
 dispatch(setModalEdit(false))
}

if(edit === false) return null
if(loading) return <Loading/>
  return (
    <div  className={s.containerModalEdit}>
    <Card sx={{ minWidth: '30vw', minHeight:'30vh',  background:'#F0EBEB'}}>
    <Button onClick={closeEditModal}> Close </Button>
        <CardContent>
        <form className={s.formEdit}>

        <TextField 
        name= 'name'
         id="standard-basic"
         label="Project Name"
         variant="standard"
         onChange={(e)=>hanldeInput(e)}
         value={projectState.name}
         
        
          
          />

        <TextField 
         name= 'description'
         id="standard-basic"
         label="Add some description"
         variant="standard"
         onChange={(e)=>hanldeInput(e)}
         value={projectState.description}
        
         />

        </form>
        </CardContent>
        <Button onClick={()=> sendUpdate(project.id)} variant="contained" >Edit Proyect</Button>

    </Card>
    </div>
  )
}
