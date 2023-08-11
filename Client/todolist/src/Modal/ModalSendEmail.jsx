

import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import s from './Modal.module.css'
import { Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { clearRecover } from '../Features/Users/UsersSlice';
import { useSelector } from 'react-redux';

export const ModalSendEmail = () => {

    const dispatch = useDispatch()
    const recover = useSelector(state => state.users.recover)
    const handleCloseModal = () =>{
        dispatch(clearRecover())
      }
  return (
    <div className={s.containerModal}>
<Card className={s.cardModalUserNotExist}>
  <CardContent>
 <Typography variant="h6">We send an email to: {recover.email} </Typography>
  <Button variant='contained' onClick={handleCloseModal}>Ok</Button>
  </CardContent>
</Card>
    </div>
  )
}
