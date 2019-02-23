import React from 'react';

import instagram from '../images/ig-logo.svg'
import './style.scss';

function Footer(params) {

    return (
        <footer
            className="app-footer"
        >
            <div className="social-links">
                <h3>ایرانگرد در شبکه‌های اجتماعی</h3>
                <ul>
                    <li>
                        <a
                            href="https://www.instagram.com/iranround_com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className="ig-logo" src={instagram} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h3>some text</h3>
            </div>
            <div>
                <h3>some text</h3>
            </div>
        </footer>
    )
}

export default Footer;