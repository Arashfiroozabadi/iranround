import React from 'react';
import {withRouter} from 'react-router-dom';

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

export default withRouter(Nav);