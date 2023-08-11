
import React from 'react'
import s from './Verify.module.css'
import Button from '@mui/material/Button';
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { recoverPassword } from '../Features/Users/UsersSlice';
import TextField from '@mui/material/TextField';
import logo from '../Assets/logo.png'
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { validateVerify } from './validateVerify';
import { ModalNoUserExist } from '../Modal/ModalNoUserExist';
import { ModalSendEmail } from '../Modal/ModalSendEmail';
import { LoadingCards } from '../Loading/LoadingCards.jsx'
import { clearRecover } from '../Features/Users/UsersSlice';
export const Verifiy = () => {
  const [email,setEmail] = useState("")
  const dispatch = useDispatch()
  const [error,setError] = useState({})
  const recover = useSelector(state => state.users.recover)
  const loading = useSelector(state => state.users.loadingVerify)
  const navigate = useNavigate()
  console.log('state enb el slice', recover) 
  console.log('loading', loading)
  console.log('error', error)


  const handleInputChange = (e) =>{
    setEmail(e.target.value)
    setError({})
   
  }

  const verifyUser = async (e) =>{
    e.preventDefault()
    setError(validateVerify(email))
      dispatch(recoverPassword(email))
   
  }

  const handleNavigate = () =>{
    dispatch(clearRecover())
    navigate('/')
  }
 
  return (
    <div>

{recover === false ? <ModalNoUserExist/> : recover.email  ? <ModalSendEmail/> : null}
      
    <div className={s.containerVerify}>
       
    <Typography onClick={handleNavigate} className={s.backLogintxt}>Back</Typography>
    <div className={s.formContainer}>
      <form className={s.formVerify}>
        <img src={logo} alt='logo'/>
       <h4 className={s.txtRecover}>Please enter your email</h4>
       <br/>
        <TextField onChange={handleInputChange}
          label="email"
        variant="standard"
        />
        <p className={s.errorVerify}>{error.email}</p> 
       <br/>
       {loading ? <Button variant="contained" disabled>Send</Button> :
       <Button onClick={verifyUser} variant='contained'>Send</Button>
}
      </form>
    </div>
   
    </div>
    </div>
  )
}
