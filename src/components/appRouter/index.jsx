import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";

import Main from '../main';
import Search from '../search';
import Nav from '../nav';
import Anime from '../anime';

const AppRouter= ()=>(
        <Anime>
            <Switch>
                <Nav />
                <Route exact path="/search" component={Search} />
                <Route path="/" component={Main} />
                <Route rednder={()=>(<h2>404</h2>)} />
            </Switch>
        </Anime>
        
    )

export default AppRouter;
