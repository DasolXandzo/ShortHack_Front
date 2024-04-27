import React from 'react'
import { NavLink } from 'react-router-dom';
import './LayoutButton.module.css';

export const LayoutButton = function({children, ...props}) {
  return (
    <NavLink to={props.post.navLink}>
      <button>
        {children}
      </button>
    </NavLink>
  )
}