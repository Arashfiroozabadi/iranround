import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from '../main';
import Search from '../search';

function AppRouter() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="search">جستوجو</Link>
                    <Link to="/">خانه</Link>
                </nav>
                <Route exact path="/" component={Main} />
                <Route exact path="/search" component={Search} />
            </div>
        </Router>
    )
}

export default AppRouter;