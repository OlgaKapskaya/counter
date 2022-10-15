import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header>
            <nav className={s.nav}>
                <NavLink
                    to={'/counter'}
                    className={({isActive}) => isActive ? s.active : ''}>COUNTER</NavLink>
                <NavLink
                    to={'/timer'}
                    className={({isActive}) => isActive ? s.active : ''}>TIMER</NavLink>
            </nav>
        </header>
    )
}