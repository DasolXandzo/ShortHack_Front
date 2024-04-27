import React from 'react'
import cl from './TextPanel.module.css';
import { Panel } from "./Panel"

export const TextPanel = function({children, ...props}) {

  return (
    <div className={cl.container}>
      
      {props.post.isLeft && <Panel post={{hasImg: false, isTextPanel: true}}>
        {props.post.panelText}
      </Panel>}

      <span>
        {children}
      </span>

      {!props.post.isLeft && <div className={cl.panel}><Panel post={{hasImg: false, isTextPanel: true}}>
        {props.post.panelText}
      </Panel></div>}

    </div>
  )
}