import { Singin } from '../Singin/Singin'
import s from './LandingPage.module.css' 
import { NavLink } from 'react-router-dom'



import React from 'react'

export const LandingPage = () => {

  
  return ( 
    <div className={s.landingPage} >
   <Singin className={s.Input} />
   <h3 className={s.register}> Haven't account yet?  <NavLink to="/register">register here </NavLink> </h3> 
   </div>
   
  )
}
