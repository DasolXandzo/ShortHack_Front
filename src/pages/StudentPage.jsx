import React from 'react'
import cl from './StudentPage.module.css'
import { MentorCard } from '../components/common'
import { Mentors } from '../components/common/Mentors'

export const StudentPage = () => {
  return (
    <div className={cl.container}>
        <div className={cl.fullScreenContainer}>
          <span className={cl.large}>Ты студент ИКН?</span>
          <span className={cl.medium}>Легко найди ментора, который поможет тебе решить имеющиеся вопросы и помочь с тем, что тебя интересует</span>
          <span>Найди своего ментора</span>
          <img src={require("../images/down_arrow.png")}/>
        </div>

        <div className={cl.searchContainer}>
          <label for='perks'>Интересующий навык:</label>
          <select id='perks' name='perks'>
            <option value='first'>Python</option>
            <option value='second'>C#</option>
            <option value='third'>Goolang</option>
          </select>
          <button className={cl.search}>Найти</button>
        </div>

        <div className={cl.cardsContainer}>
          {Mentors.map((item, index) => {
            return(
              <MentorCard post={{name: item.name,
              imgLink: item.imgLink,
              track: item.track,
              perks: item.perks,
              tgLink: item.tgLink}}>
              </MentorCard>
            )
          })}
        </div>
    </div>
  )
}