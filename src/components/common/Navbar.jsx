import React from 'react'
import { NavLink } from 'react-router-dom'
import cl from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
            <img src={require('../../images/mentor_logo.png')}/>
        </NavLink>
        <ul>
            <li>
                <NavLink to="/student">Студентам</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Профиль</NavLink>
            </li>
            <li>
                <NavLink to="/mentor" id={cl["focusButton"]}>Стать ментором</NavLink>
            </li>
        </ul>
    </nav>
  )
}