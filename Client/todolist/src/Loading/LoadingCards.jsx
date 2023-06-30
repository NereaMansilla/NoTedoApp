
import React from 'react'
import s from './Loading.module.css'

export const LoadingCards = () => {
  return (
    <div className={s.loadingCard} >
        <img className={s.imgLoadingCard} src="https://media.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif"  alt='Loading'/>
    </div>
  )
}
