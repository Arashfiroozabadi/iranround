import React from 'react';

import './style.scss';

function Caption({
    children,
}) {
    return (
        <div
            className='container-caption'
            role='contentinfo'
            aria-label="caption"
        >
            <p>
                {children}
            </p>
        </div>
    )
}

export default Caption;
