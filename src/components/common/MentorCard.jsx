import React, { Children } from 'react'
import cl from './MentorCard.module.css'

export const MentorCard = function({Children, ...props}) {
  return (
    <div className={cl.container}>
      <div className={cl.info}>
        <img src={props.post.imgLink}/>
        <span>{props.post.name}</span>
      </div>

      <div className={cl.perks}>
        <div className={cl.infoField}>
            <span>Направление:</span>
            <span className={cl.inf}>{props.post.track}</span>
        </div>
        <div className={cl.infoField}>
            <span>Навыки:</span>
            <span className={cl.inf}>{props.post.perks}</span>
        </div>
        <div className={cl.infoField}>
            <span>Telegram:</span>
            <span className={cl.inf}>{props.post.tgLink}</span>
        </div>
      </div>
    </div>
  )
}