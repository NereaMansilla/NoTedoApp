
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './Input.module.css'
/* import { ButtonSendUser } from '../ButtonSendUser/ButtonSendUser'; */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logginUser } from '../Features/Users/UsersSlice.js';
import {userCall} from '../Features/Users/UsersSlice.js'


export const Input = () => {
  const [input, setInput] = useState({
    password: '',
    username: ''
  })
  const dispatch = useDispatch()
  const handldeInput = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }
  console.log(input)

  const handleButton = (e) => {
    e.preventDefault(e)
    dispatch(userCall(input))
  }

  return (

    <div className={s.containerInput}>
      <form>
        <TextField type='text'
          name='name'
          label="name"
          variant="standard"
          onChange={handldeInput} />

        <TextField type='password'
          name='password'
          autoComplete='on'
          label="password"
          variant="standard"
          onChange={handldeInput} />

        <TextField type='text'
          name='email'
          label="email"
          variant="standard"
          onChange={handldeInput} />
      </form>

      <div className={s.buttonContainer}>

        <Button variant="contained" onClick={handleButton}>
          Send
        </Button>


      </div>

    </div>
  )
}
