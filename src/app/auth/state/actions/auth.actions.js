//app/auth/state/actions/auth.actions.js

import * as ActionTypes from '../action-types';

// here all the action creators goes
// Made API call, posted username, password, the server returns token, user identity
export const loginSucceeded = (identity) => ({
                                                type: ActionTypes.AUTH_LOGIN_SUCCEEDED,
                                                // payload is a convention
                                                payload: identity
                                            });

export const logout = () => ({type: ActionTypes.AUTH_LOGOUT});