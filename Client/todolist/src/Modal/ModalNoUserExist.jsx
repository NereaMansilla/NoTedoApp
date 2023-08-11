


import React from 'react'
import s from './Modal.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { clearRecover } from '../Features/Users/UsersSlice';
import { useDispatch } from 'react-redux';

export const ModalNoUserExist = () => {

  const dispatch = useDispatch()
  const handleCloseModal = () =>{
    dispatch(clearRecover())
  }
  
  return (
    <div className={s.containerModal}>
<Card className={s.cardModalUserNotExist}>
  <CardContent>
 <Typography variant="h6">Cannot find user with this email, please try again!</Typography>
  <Button variant='contained' onClick={handleCloseModal}>Ok</Button>
  </CardContent>
</Card>
    </div>
  )
}
