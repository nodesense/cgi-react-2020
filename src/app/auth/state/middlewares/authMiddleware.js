// app/auth/state/middlewares/authMiddleware.js
import * as ActionTypes from '../action-types';
// write the user idenity to local storage when user login succeded,
// clear the user identity when user logout

//es6

export const authMiddleware = ({getState, dispatch}) => next => action =>  {
    console.log("AuthMiddleware ", action)

    if (action.type === ActionTypes.AUTH_LOGIN_SUCCEEDED) {
        // store the user info to localStorage
        window.localStorage.setItem("identity", JSON.stringify(action.payload))
    }

    if (action.type === ActionTypes.AUTH_LOGOUT) {
        window.localStorage.removeItem("identity")
        window.localStorage.removeItem("token")
    }

    return next(action)
}
