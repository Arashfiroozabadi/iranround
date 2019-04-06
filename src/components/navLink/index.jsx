import React from 'react';
import { withRouter } from 'react-router-dom';

function handlePush(props) {
    const timeOut = setTimeout(
        () => {

            if (props.location.pathname === `/${props.to}`) {
                return null
            } else {
                console.log(props);
                props.history.push(`${props.location.pathname}${props.to}`)
            }
        },
        1000,
    )
}

function NavLink(props) {
    return (
        <div>
            <button
                onClick={() => handlePush(props)}
            >
                {props.to}
            </button>
        </div>
    )
}


export default withRouter(NavLink);