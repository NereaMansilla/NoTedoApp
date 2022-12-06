
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  s  from './Register.module.css'
import {createUserCall} from '../Features/CreateUser/CreateUsers.js'
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Validate } from './validators';
import {ErrorCreateUser} from '../Error/ErrorCreateUser.jsx'
import logo from '../Assets/logo.png'
export const Register = () => {

  const dispatch = useDispatch()
  const newUser = useSelector(state => state.newUser)
  const navigate = useNavigate()


const [user, setUser] = useState({
  name: '',
  email:'',
  password:''
})

const [error, setErrors] = useState({})



console.log('newuserje', newUser.newUser.token)

useEffect(()=>{
if(newUser.newUser.authorized === true) navigate('/projects')
}, [newUser.newUser.authorized, navigate])


const handleInput = (e) =>{
  
  setUser({
   ...user,
   [e.target.name] : e.target.value
  })
 
 
}

const submitInfo = (e) =>{
 e.preventDefault()
 setErrors(Validate(user))
 dispatch(createUserCall(user))
}




  return (
 


   <div className={s.containerForm}>
  

  <form  onSubmit={submitInfo} className={s.formAccount}>
 
 <div className={s.logoContainer}>
  <img src={logo} classname={s.logo} alt='logo' /> 
 </div>
 
    <TextField type='text'
        name='name'
        label="name"
        variant="standard"
        placeholder="ex: Michael Scott"
        onChange={handleInput}
        onFocus={() => setErrors('')}
         />
         <p className={s.error}>{error.name}</p>

<TextField type='text'

        name='email'
        label="email"
        variant="standard"
        placeholder="ex: fakemail@gmail.com"
        onChange={handleInput}
        onFocus={() => setErrors('')}
        
        
      />
        <p className={s.error}> {error.email} </p>

<TextField type='password'
        name='password'
        label="password"
        variant="standard"
        placeholder="ex: f4k3p4ssw0rd"
        onChange={handleInput}
        onFocus={() => setErrors('')}
        />

      <p className={s.error}> {error.password} </p>
    <Button className={s.btnAccount}  variant="contained" type='submit' > 
        Create account
      </Button>
      </form>
 
   
  
     

    
     
         
    {
   newUser.newUser.authorized === false && newUser.newUser.alredyExist === true ? <ErrorCreateUser/> : null
    }

    
    </div>

 
  
    
  )
}

