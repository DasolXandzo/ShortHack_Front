import React from 'react'
import cl from './HomePage.module.css'
import { LayoutButton, Panel, TextPanel } from '../components/common'

export const HomePage = () => {
  return (
    <div className={cl.container}>
        <div className={cl.fullScreenContainer}>
            <span>Найди своего ментора</span>
            <span>Или присоединись к нашим рядам</span>
            <LayoutButton post={{navLink: "/"}}>Найти ментора</LayoutButton>
        </div>
        <div className={cl.fullScreenContainer}>
            <Panel post={{isTextPanel: false, hasImg: true, imgLink: require("../images/crying_king.png")}}>Этот сервис создает мост между студентами и опытными менторами. Студенты могут обратиться к менторам с вопросами, получить советы и рекомендации, основанные на реальных примерах, а также узнать о лучших практиках в программировании.</Panel>
        </div>
        <div className={cl.fullScreenContainer}>
            <TextPanel post={{isLeft: false, panelText: "Студенты могут получить ценные знания от менторов, что позволит им лучше понять реальные задачи, разрешить различные вопросы по поводу применяемых технологий и реализаций, а также создать свою сеть профессиональных связей. "}}>Для студентов</TextPanel>
        </div>
        <div className={cl.fullScreenContainer}>
            <TextPanel post={{isLeft: true, panelText: "Менторство – это возможность внести свой вклад в развитие IT-сообщества. Менторы могут передать свой опыт, а посредством общения с молодыми специалистами оставаться в курсе новых технологий и поддерживать свои навыки на высоком уровне."}}>Для выпускников</TextPanel>
        </div>
    </div>
  )
}