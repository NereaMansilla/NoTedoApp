

import React from 'react'
import Alert from '@mui/material/Alert';
import s from './Error.module.css'

export const Error = () => {
  return (
    <div>
             <Alert className={s.error} severity="error">Password or email invalid. Try again!</Alert>
             

    </div>
  )
}

