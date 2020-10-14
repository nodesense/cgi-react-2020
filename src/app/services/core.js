//app/services/core.js

import axios from 'axios';

export const getJson = (url, config={}) => {
    // where inject tokens.. cross cutting concerns with api call
    return axios.get(url, config)
}