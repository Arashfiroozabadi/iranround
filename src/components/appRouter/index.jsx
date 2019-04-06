import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from '../main';
import Search from '../search';
import Nav from '../nav';

function AppRouter() {
    return (
        <Router>
            <div>
                <Nav />
                <Route exact path="/" component={Main} />
                <Route exact path="/search" component={Search} />
            </div>
        </Router>
    )
}

export default AppRouter;