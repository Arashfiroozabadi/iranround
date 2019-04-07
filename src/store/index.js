import { combineReducers } from 'redux';
// Actions

const PLAY = "PLAY_ANIME"

export const startPlay=play=>({
        type:PLAY,
        play
})
// Reducer
export const animations = (state={play:false}, action)=>{
    switch (action.type){

        case PLAY:
            return{ play : true};

        default:
            return state;
    }
}

export default combineReducers({
    animations
})