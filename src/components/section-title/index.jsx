import React from 'react';

import './style.scss'

export default function SectionTitle({title,color}){
    return(
        <h3
            className="section-title"
            style={{
                color
            }}
        >
            {title}
        </h3>
    )
}