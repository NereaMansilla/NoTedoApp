import { Input } from '../Input/Input'
import s from './Home.module.css' 
import {useSelector} from 'react-redux'



import React from 'react'

export const Home = () => {

  /* const projects = useSelector(state => state.projects)
   console.log(projects) */
  return ( 
    <div className={s.landingPage}>
   <Input className={s.Input} />
   <h3 className={s.register}> Haven't account yet?   Register here  </h3>
   </div>
   
  )
}
