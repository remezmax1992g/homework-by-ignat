import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => (isActive ? s.active : s.link)}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => (isActive ? s.active : s.link)}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => (isActive ? s.active : s.link)}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
