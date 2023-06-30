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
   

<Container>
<Grid container  spacing={2} justify='center' alignItems="center" sx={{height: '100vh', marginTop:'55px'}}>
    
    { project.projects.length > 0 ? project.projects?.map((c)=>{
   
    return  <Grid item xs={12} md={6} lg={4} justify='center' key={c.id}>  <ProjectCard  project={c} key={c.id} />  </Grid>
    
   }) : <EmptyProyects/>} 

</Grid>
</Container>

  )

}

