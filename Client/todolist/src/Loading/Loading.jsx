
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import s from './Loading.module.css'



export const Loading = () => {
  return (
    <div className={s.containerLoading}>
 <Card sx={{ minWidth: '30vw', minHeight:'30vh',  background:'#F0EBEB'}}>
   <img className={s.loadingImg} src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif" alt='loading'/>

    </Card>
    </div>
  )
}
