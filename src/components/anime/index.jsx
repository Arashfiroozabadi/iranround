import React from 'react';

import anime from 'animejs';



const Anime =(props)=>{
    console.log(props);
    
    anime({
        // targets: e.currentTarget,
        // translateX: [
        //     { value: -2, duration: 20 },
        //     { value: 2, duration: 20, delay: 30 },
        //     { value: 0, duration: 20, delay: 30 }
        // ],
    });
    return(
        <div className="anime">
            {props.children}
        </div>
    )
}

export default (Anime);