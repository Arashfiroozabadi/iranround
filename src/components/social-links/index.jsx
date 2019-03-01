import React from 'react';

import './style.scss';

function SocialLinks({
    href,
    src,
    alt,
    title,
}) {
    return (
        <a
            className="social-links"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={src} alt={alt} title={title} />
        </a>
    )
}

export default SocialLinks;