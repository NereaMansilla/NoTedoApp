 

 import React from 'react'
 import { ProjectCards } from '../Project/ProjectCards'
 import { NavBar } from '../NavBar/NavBar'
 import {Modal} from '../Modal/Modal.jsx'
 import { AllTaskModal } from '../Modal/allTaskModal'
  
 export const Home =  () => {


  return(
<div>

<Modal/>
<AllTaskModal />
  <NavBar/>
 
<ProjectCards />
  



</div>
  )

}
 