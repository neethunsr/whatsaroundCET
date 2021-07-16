import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem(props) {

    const {name, iconClassName, onClick, to} = props;
    return (
        <li onClick={onClick}>
            <NavLink exact to={to} className="menu-item">
                <div className="menu-icon">
                <i class={iconClassName}></i>
                </div>
                <span>{name}</span>
                </NavLink>
        </li>
    );
}

export default MenuItem;