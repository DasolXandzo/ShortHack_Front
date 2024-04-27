import React from 'react'
import cl from './TextField.module.css'

export const TextField = function({children, ...props}) {
  return (
    <div className={cl.container}>
        <div className={cl.text}>{children}</div>
        <input type={props.post.type} size={props.post.size} placeholder={props.post.placeholder}></input>
    </div>
  )
}
