//app/services/core.js

import axios from 'axios';

export const getJson = (url, config={}) => {
    // where inject tokens.. cross cutting concerns with api call
    return axios.get(url, config)
}

export const postJson = (url, data, config={}) => {
    return axios.post(url, data, config)
}

export const putJson = (url, data, config={}) => {
    return axios.put(url, data, config)
}

export const deleteJson = (url,  config={}) => {
    return axios.delete(url, config)
}