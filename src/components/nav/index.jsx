import React from 'react';

import './style.scss';
import NavLink from '../navLink';

function Nav() {
    return (
        <nav className="nav" >
            <NavLink to='/'>خانه</NavLink>
            <NavLink to="/search" >جستوجو</NavLink>
        </nav>
    )
}

export default Nav;