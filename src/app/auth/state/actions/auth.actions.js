//app/auth/state/actions/auth.actions.js

import * as ActionTypes from '../action-types';
import * as service from '../services/auth.services';

// here all the action creators goes
// Made API call, posted username, password, the server returns token, user identity
export const loginSucceeded = (identity) => ({
                                                type: ActionTypes.AUTH_LOGIN_SUCCEEDED,
                                                // payload is a convention
                                                payload: identity
                                            });

export const logout = () => ({type: ActionTypes.AUTH_LOGOUT});


// in redux, where to write async code, workflow
// how to handle side effects,  cross cutting concerns
// Redux is sync library
// React is UI

// different approaches

// 1. redux-thunk - simple (10 lines of code) middleware - same redux author - library
// 2. redux-saga - workflow
// 3. redux-obervable - rxjs + effects

// redux-thunk approach
// write the sides-effect api calls/async calls in the action creators

//login into web service
// get token, identity
// store token, put hte identity in store, authenticated: true

// thunk - for async code
// thunk returns a function callback as an action instead of object with type
export const login = (username, password) => {
    // the function is called by thunk middleware, dispatch and getState passed as arg
    return async function callback(dispatch, getState) {
        // write async code, api, timer, etc, promise etc...
        console.log("login callback called by redux-thunk")
        console.log("loggin in now...")
        
        try {
            // this automatically add a promise with then part
            const data = await service.login(username, password)
            console.log("API Response ", data)
            const {token, identity} = data;
            window.localStorage.setItem("token", token)
            // dispatch identity, loginSucceeded
            dispatch(loginSucceeded(identity))
            console.log("AFTER LOGIN STATE ", getState())
        }catch(error) { // promise.catch(error)
            console.log("login failed ", error)
        }
    }
}