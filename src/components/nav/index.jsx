import React from 'react';
import { Link } from 'react-router-dom';

import NavLink from '../navLink';

function Nav() {
    return (
        <nav>
            <Link to='/'>خانه</Link>
            <Link to="/search">جستوجو</Link>
            <NavLink to="search" />
        </nav>
    )
}

export default Nav;