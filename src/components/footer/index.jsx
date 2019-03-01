import React from 'react';

import instagram from '../images/ig-logo.svg'
import './style.scss';
import SectionTitle from '../section-title';
import SocialLinks from '../social-links';

function Footer(params) {

    return (
        <footer
            className="app-footer"
        >
            <div className="social-links-continer">
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
            <div className="about-ig">
                <SectionTitle
                    title="درباره ایرانگرد"
                    color="white"
                />
                <div>
                    <p className="about-ig-caption-text" >
                        ایرانگرد وبسایتی جهت به اشتراک گذاشتن نقاط دیدنی ایران است.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;