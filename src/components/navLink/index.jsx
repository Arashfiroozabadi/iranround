import React from 'react';
import { withRouter } from 'react-router-dom';
import anime from 'animejs';
import './style.scss';

function handlePush(props) {
    setTimeout(
        () => {

            if (props.location.pathname === props.to) {
                return null;
            } else {
                props.history.push(props.to)
            }
        },
        1000,
    )
}

function activeLink(props){
    if (props.location.pathname === props.to) {
        return {
            backgroundColor:'blueviolet',
            opacity:1
        };
    }
}

function NavLink(props) {
    return (
        <div className="nav-link" >
            <button
                className="nav-link-button"
                onClick={() => handlePush(props)}
                style={activeLink(props)}
                onMouseOver={e => {
                    anime({
                      targets: e.currentTarget,
                      scale: {
                        value: 1.08,
                        duration: 200
                      },
                    })
                }}
                onMouseOut={e => {
                    anime({
                      targets: e.currentTarget,
                      scale: {
                        value: 1,
                        duration: 300
                      }
                    })
                }}
            >
                {props.children}
            </button>
        </div>
    )
}


export default withRouter(NavLink);