import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getProjects } from '../Features/getProjects/getProjects.js'
import { ProjectCard } from './ProjectCard'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export const ProjectCards = () => {

    const dispatch= useDispatch()

    const user = useSelector(state => state.users)
    const project = useSelector(state => state.projects)
   
  
  

    useEffect(()=>{
        dispatch(getProjects({token: user.users.token, id: user.users.id}))
        },[dispatch, user.users.token,user.users.id])

    
  
  return (
   

<Container>
<Grid container  spacing={2} justify='center' alignItems="center" sx={{height: '100vh', marginTop:'55px'}}>
    
    {project.projects.map((c)=>{
   
    return  <Grid item xs={12} md={6} lg={4} justify='center' key={c.id}>  <ProjectCard  project={c} key={c.id} />  </Grid>
    
   })} 

</Grid>
</Container>

  )

}

