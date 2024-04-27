import React from 'react'
import cl from './Panel.module.css';

export const Panel = function({children, ...props}) {
  return (
    <div className={cl.container}>

      <div className={props.post.isTextPanel ? cl.smallText : cl.largeText}>
        {children}
      </div>

      {props.post.hasImg && <img src={props.post.imgLink}/>}

    </div>
  )
}