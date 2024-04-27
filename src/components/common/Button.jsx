import React from 'react'
import cl from './Button.module.css';

export const Button = function({children, ...props}) {
  return (
    <button className={cl.button}>
      {children}
    </button>
  )
}