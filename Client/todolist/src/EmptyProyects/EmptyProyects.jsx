
import React from 'react'
import s from './EmptyProyects.module.css'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { setModal } from '../Features/CreateProjects/CreateProjects';
import { useDispatch } from 'react-redux';

export const EmptyProyects = () => {
  const dispatch = useDispatch()

  const openModalCreateP = () =>{
    dispatch(setModal(true))
  }
  return (
    <div className={s.EmptyContainer}>
        <h1>Parece que aun no tienes ningun proyecto</h1>
        <div className={s.emptyIcon}>
       <LibraryAddIcon/>
        <h1 className={s.createProjectBtn} onClick={openModalCreateP}>Agregar</h1>
        </div>
    </div>
  )
}
