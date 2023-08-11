import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProjects } from '../Features/getProjects/getProjects.js'
import { ProjectCard } from './ProjectCard'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { EmptyProyects } from '../EmptyProyects/EmptyProyects.jsx'
import { UseToken } from '../Hooks/UseToken.jsx'
import { UseId } from '../Hooks/UseId.jsx'
import { Loading } from '../Loading/Loading.jsx'
import { LoadingCards } from '../Loading/LoadingCards.jsx'
import s from './Card.module.css'


export const ProjectCards = () => {

    const dispatch= useDispatch()
    const token = UseToken()
    const id = UseId()
    const loading = useSelector(state => state.projects.loadingProjects)
    const project = useSelector(state => state.projects)
 
    useEffect(()=>{
        dispatch(getProjects({token: token, id: id}))
        },[dispatch, token,id])

 
if(loading === true) return <LoadingCards/>
  return (
   


<div className={s.containerCards}>
    
    { project.projects.length > 0 ? project.projects?.map((c)=>{
   
    return  <ProjectCard  project={c} key={c.id} />  
    
   }) : <EmptyProyects/>} 

</div>


  )

}

