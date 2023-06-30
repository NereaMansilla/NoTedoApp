
import React from 'react'
import s from './EmptyProyects.module.css'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

export const EmptyProyects = () => {
  return (
    <div className={s.EmptyContainer}>
        <h1>Parece que aun no tienes ningun proyecto</h1>
        <div className={s.emptyIcon}>
       <LibraryAddIcon/>
        <h1>Agregar</h1>
        </div>
    </div>
  )
}
