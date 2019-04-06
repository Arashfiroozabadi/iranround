import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import anime from 'animejs';
import Anime from 'react-anime';
import Main from '../main';
import Search from '../search';
import Nav from '../nav';

function AppRouter() {
   
    return (
        <Switch>
            <div>
                <Nav />
                <Anime easing="easeOutElastic"
                    loop={true}
                    duration={1000}
                    direction="alternate"
                    delay={(el, index) => index * 240}
                    scale={[.75, .9]}>
                    <div>
                        <Route exact path="/" component={Main} />
                    </div>
                </Anime>
                <div>
                    <Route exact path="/search" component={Search} />
                </div>
                
            </div>
        </Switch>
    )
}

export default AppRouter;