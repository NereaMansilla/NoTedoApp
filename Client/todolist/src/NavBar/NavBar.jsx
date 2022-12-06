import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoNavBar from '../Assets/logoNavbar.png'
import Button from '@mui/material/Button';
import {useSelector} from 'react-redux'
/* import {Modal} from '../Modal/Modal.jsx' */
/* import  {setModal}  from '../Features/CreateProjects/CreateProjects';
import {useDispatch} from 'react-redux' */
import { setModal } from '../Features/CreateProjects/CreateProjects';
import { useDispatch } from 'react-redux';
import React from 'react'




export const NavBar = () => {
const dispatch = useDispatch()
    const user = useSelector(state => state.users)
   /*  const [openModal, setOpenModal] = useState(false) */
  const modal1 = useSelector(state => state.newProject.modal)
  console.log('aca esta el modal', modal1)


const openModalButton = () =>{
    dispatch(setModal(true))
}

  return (
    <div>



 
        
<AppBar sx={{ background: '#4CBB17'}}>
    <Toolbar>
        <Typography variant='h6'>

            <img src={logoNavBar} alt='logo' />
            
        </Typography>
        <Typography variant='h6' >
       Hello {user.users.name}! 
        </Typography>  
    <Button sx={{background: '#0080FF', color: '#000', borderRadius: '50px'}} onClick={openModalButton}> Create new Project </Button>                
    </Toolbar>
</AppBar>


    </div>
  )
}
