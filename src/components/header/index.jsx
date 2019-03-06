import React from 'react';

import './style.scss'

function Header(params) {

    return (
        <header
            className="app-header"
        >
            <div
                className="app-title"
            >
                <h1
                    className="app-logo"
                >
                    IranRound
                </h1>
            </div>
        </header>
    )
}

export default Header;