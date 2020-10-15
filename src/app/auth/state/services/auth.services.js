// app/auth/state/services/auth.services.js
import {postJson} from '../../../services/core';
import config from '../../../config';

// API calls specific to login/refresh tokens ....
export const login= async (username, password) => {
    const payload = {username, password}
    return postJson(`${config.API_ENDPOINT}/oauth/token`, payload, {})
          .then (response => response.data)
}