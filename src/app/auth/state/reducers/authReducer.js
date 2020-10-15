//app/auth/state/reducers/authReducer.js
import * as ActionTypes from '../action-types';

const INITIAL_STATE = {
    authenticated: false,
    identity: {}, // user info, like, email etc
}

const authReducer = (state = INITIAL_STATE, action) => {
    console.log("authReducer called", state, action)
    switch(action.type) {
       case ActionTypes.AUTH_LOGIN_SUCCEEDED: 
                    return {...state, authenticated: true, identity: action.payload}
       case ActionTypes.AUTH_LOGOUT:  
                    return {...state, authenticated: false, identity: {}}
       default: return state;
    }
}

export {authReducer} // authReducer:authReducer
