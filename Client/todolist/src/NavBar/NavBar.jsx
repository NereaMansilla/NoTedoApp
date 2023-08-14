import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoNavBar from '../Assets/logoNavbar.png'
import Button from '@mui/material/Button';
import { setModal } from '../Features/CreateProjects/CreateProjects';
import { useDispatch } from 'react-redux';
import { UseUser } from '../Hooks/UseUser';
import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css'
import React from 'react'




export const NavBar = () => {
const dispatch = useDispatch()
const user= UseUser()


console.log('user', user)


const openModalButton = () =>{
    dispatch(setModal(true))
}

  return (
 
        
<AppBar className={s.AppBar}>
    <Toolbar className={s.toolBar}>
        <Typography className={s.txtNavBar} variant='h6'>

            <img src={logoNavBar} alt='logo' />
            
            <NavLink to={`/${user}`} style= { { textDecoration: 'none', color:'white' }}>
            <h4 className={s.txtUsername}>Hello {user}!</h4>
            </NavLink>
        </Typography>  
     

    <Button className={s.btnCreateP}  sx={{fontSize:'10px'}} variant="contained" onClick={openModalButton}> Create new Project </Button>                
 
    </Toolbar>
</AppBar>


    
  )
}
