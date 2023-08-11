

import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import s from './CloseSesion.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UseEmail } from '../Hooks/UseEmail';
import { deleteUser } from '../Features/Users/UsersSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserState } from '../Features/Users/UsersSlice';
import { clearProjectState } from '../Features/getProjects/getProjects';

export const CloseSesion = () => {
 
const email = UseEmail()
const dispatch = useDispatch()
const navigate = useNavigate()

    const closeSesion = () =>{
        dispatch(clearUserState()) 
       dispatch(clearProjectState()) 
    localStorage.clear(); 
    navigate('/')
    } 

    const deleteAccount = () =>{
     dispatch(deleteUser(email))
    }
  return (
    <div className={s.containerBtnCS}>
     <div>
   <Typography variant='h5' sx={{color:'gray'}}>What do you like to do?</Typography>
   <br/>
  

    <Button onClick={closeSesion} variant="contained">Close sesion</Button>
 
   
    <br/>
    <br/>
    <Button onClick={deleteAccount} variant="contained">Delete account</Button>
     </div>   
    </div>

  )
}
