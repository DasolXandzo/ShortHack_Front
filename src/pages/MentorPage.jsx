import React from 'react'
import cl from './MentorPage.module.css'
import { GraduateRegistrationForm } from '../components/GraduateRegistrationForm'

export const MentorPage = () => {
  return (
    <div className={cl.container}>
        <div className={cl.fullScreenContainer}>
            <span className={cl.large}>Ты выпускник ИКН & ITaM?</span>
            <span className={cl.medium}>Помоги студентам стать лучше, делясь своими навыками и опытом </span>
            <span>Заполняй форму и начинай</span>
            <img src={require("../images/down_arrow.png")}/>
        </div>
        <div className={cl.fullScreenContainer}>
            <GraduateRegistrationForm>Стань ментором</GraduateRegistrationForm>
        </div>
    </div>
  )
}