import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import anime from 'animejs';

import './style.scss';

function handlePush(e,props) {
    if (props.location.pathname === props.to) {
        return null;
    } else {
        props.startAnime();
        anime({
            targets: e.currentTarget,
            translateX: [
                { value: -2, duration: 20 },
                { value: 2, duration: 20, delay: 30 },
                { value: 0, duration: 20, delay: 30 }
            ],
        });
    }
    
    setTimeout(
        () => {
            if (props.location.pathname === props.to) {
                return null;
            } else {
                window.scrollTo(0,0);
                props.history.push(props.to);
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
                onClick={(e) => handlePush(e,props)}
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

const mapStateToProps = (state, ownProps) => {
    return {
      
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     startAnime: () => dispatch({ type : "PLAY_ANIME"})
    }
  }

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
    (NavLink)
);