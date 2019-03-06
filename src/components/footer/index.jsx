import React from 'react';

import instagram from '../images/ig-logo.svg'
import './style.scss';
import SectionTitle from '../section-title';
import SocialLinks from '../social-links';
import Caption from '../caption';

function Footer(params) {

    return (
        <footer
            className="app-footer"
        >
            <div className="row social-links-continer">
                <SectionTitle
                    title="ایرانگرد در شبکه‌های اجتماعی"
                    color="white"
                />
                <div>
                    <SocialLinks
                        href="https://www.instagram.com/iranround_com"
                        src={instagram}
                        alt="Instagram-link"
                        title="Instagram"

                    />
                </div>
            </div>
            <div className="row about-ig">
                <SectionTitle
                    title="درباره ایرانگرد"
                    color="white"
                />
                <div>
                    <Caption>
                        ایرانگرد وبسایتی جهت به اشتراک گذاشتن نقاط دیدنی ایران است.
                    </Caption>
                </div>
            </div>
        </footer>
    )
}

export default Footer;