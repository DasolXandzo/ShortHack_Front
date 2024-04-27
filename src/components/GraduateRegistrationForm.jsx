import React from 'react'
import { TextField, FileField, Button } from './common'
import cl from './GraduateRegistrationForm.module.css'

export const GraduateRegistrationForm = function({children, ...props}) {
  return (
    <div className={cl.container}>
      {children}
      <TextField post={{type: 'text', size: '40', placeholder: 'Ваше имя'}}>Имя:</TextField>
      <TextField post={{type: 'text', size: '40', placeholder: 'Ваша фамилия'}}>Фамилия:</TextField>
      <TextField post={{type: 'text', size: '40', placeholder: 'Направление, которое закончили'}}>Направление:</TextField>
      <TextField post={{type: 'text', size: '40', placeholder: 'С чем можешь помочь'}}>Навыки:</TextField>
      <TextField post={{type: 'text', size: '40', placeholder: '23 y.o. designer from Moscow'}}>Расскажи о себе:</TextField>
      <FileField>Фото профиля:</FileField>
      <TextField post={{type: 'text', size: '40', placeholder: 'https://t.me/.....'}}>Telegram:</TextField>
      <Button>Отправить</Button>
    </div>
  )
}