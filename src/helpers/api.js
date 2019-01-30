import { apiConstants } from '../constants/api.constants'
import axios from 'axios';


export const getProducts = (id) => {
    if (!id) return axios.get(apiConstants.PRODUCTS_URL);
    return axios.get(apiConstants.PRODUCTS_URL + `/${id}`);
}

export const getCategories = () => {
    return axios.get(apiConstants.CATEGORIES_URL)
}