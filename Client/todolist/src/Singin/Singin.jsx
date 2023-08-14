
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
import { LoadingCards } from '../Loading/LoadingCards.jsx'








export const Singin = () => {
 
 const user = useSelector(state => state.users)
 const loading = useSelector(state => state.users.loading)
 console.log('loading', loading)
 const [errorSingin,setErrorSingin] = useState("")
 

 
 

  const dispatch = useDispatch()
  const navigate= useNavigate()

  const [input, setInput] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [error,setError] = useState({})

 
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

  
/* if(loading) return <LoadingCards/> */
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
  {loading ?  <Button variant="contained" className={s.btn}> 
        <img className={s.btnLoading} src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif"  alt='Loading'/>
        </Button> 
      : <Button  className={s.btn} variant="contained" onClick={ handleButton} >Send</Button>  
      }
       

        
      </form>

     {/* 
      */}
     <Typography className={s.txtPassword} onClick={handleVerify}  >Forgot your password?</Typography >
      
    {/*  <h3 className={s.register}> Haven't account yet?  <NavLink to="/register">register here </NavLink> </h3>  */}
      
    </div>

    
    
    
   
  )
  

}
