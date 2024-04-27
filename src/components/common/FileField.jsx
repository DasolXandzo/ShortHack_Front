import React from 'react'
import cl from './FileField.module.css'

export const FileField = function({children, ...props}) {
  return (
    <div className={cl.container}>
        <div className={cl.text}>{children}</div>
        <input type='file' size='30'></input>
    </div>
  )
}