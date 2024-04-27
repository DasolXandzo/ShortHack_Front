import React from 'react'
import { NavLink } from 'react-router-dom';
import cl from './LayoutButton.module.css';

export const LayoutButton = function({children, ...props}) {
  return (
    <NavLink to={props.post.navLink}>
      <button className={cl.button}>
        {children}
      </button>
    </NavLink>
  )
}