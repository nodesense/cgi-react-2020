// app/services/products.js
import {getJson} from './core';
import config from '../config';

export const getProducts = (options = {}) => {
    return getJson(`${config.API_ENDPOINT}/api/products`, options)
           .then (response => response.data) 
}
