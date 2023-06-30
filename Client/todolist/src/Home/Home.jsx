 

 import React from 'react'
 import { ProjectCards } from '../Project/ProjectCards'
 import { NavBar } from '../NavBar/NavBar'
 import {Modal} from '../Modal/Modal.jsx'
 import { EditProject } from '../EditProject/EditProject'

  
 export const Home =  () => {





  return(
<div>

<Modal/>
<EditProject/>
  <NavBar/>
 
<ProjectCards />
  



</div>
  )

}
 