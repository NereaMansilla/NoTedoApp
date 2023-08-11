
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './Singin.module.css'
import { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {userCall} from '../Features/Users/UsersSlice.js'
import { useNavigate } from "react-router-dom";
import {Error} from '../Error/Error.jsx'
import { Validator } from './validade.jsx';
import Typography from '@mui/material/Typography';
import logoSingin from '../Assets/logo.png'
import { NavLink, Link} from 'react-router-dom';








export const Singin = () => {
 
 const user = useSelector(state => state.users)
 const loading = useSelector(state => state.users.loading)
 const [errorSingin,setErrorSingin] = useState("")
 

 
 

  const dispatch = useDispatch()
  const navigate= useNavigate()

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error,setError] = useState({})

 console.log(error)
  useEffect(()=>{
 if( user.users.authorized && user.users.authorized === true) navigate('/projects')
}, [user.users.authorized, navigate])   





  const handldeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    setError({})
  }
 

  const handleButton = async (e) => {
    e.preventDefault()
    setError(Validator(input))


  dispatch(userCall(input))
}
  



   const handleVerify = () =>{
    navigate('/verify')
  }

  

  return (
    

      <div className={s.containerInput}>
    
  
      <form className={s.form}>

       <div className={s.logoSinginContainer}>
  <img src={logoSingin} className={s.logoSingin} alt='logo' /> 
 </div>
        <TextField type='password'
          name='password'
          autoComplete='on'
          label="password"
          variant="standard"
          onChange={handldeInput} />

         <p className={s.errors}> {error.password} </p>

        <TextField type='text'
          name='email'
          label="email"
          variant="standard"
          onChange={handldeInput} />
          <p className={s.errors}>{error.email}</p>

        { 
       user.users  === false ? <Error /> : null
  } 
  <br/>
        <Button variant="contained" onClick={ handleButton} className={s.btn}> 
          Send
        </Button>

        
      </form>

     {/* 
      */}
     <Typography className={s.txtPassword} onClick={handleVerify}  >Forgot your password?</Typography >
      
    {/*  <h3 className={s.register}> Haven't account yet?  <NavLink to="/register">register here </NavLink> </h3>  */}
      
    </div>

    
    
    
   
  )
  

}
