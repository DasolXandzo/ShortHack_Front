import React from 'react'
import cl from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={cl.container}>
      <img src={require('../../images/mentor_logo.png')}/>
      <a>Группа в ВК</a>
      <a>Группа в ТГ</a>
    </div>
  )
}
