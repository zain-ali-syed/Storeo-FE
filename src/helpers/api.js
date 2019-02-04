import { apiConstants } from '../constants/api.constants'
import axios from 'axios';



//COMMON ADMIN AND CLIENT APIS

export const getProducts = (id) => {
    if (!id) return axios.get(apiConstants.PRODUCTS_URL);
    return axios.get(apiConstants.PRODUCTS_URL + `/${id}`);
}


export const getProductsByCatId = (id) => {
    return axios.get(apiConstants.PRODUCTS_BY_CAT + `/${id}`)
}


export const getCategories = (id) => {
    if (!id) return axios.get(apiConstants.CATEGORIES_URL);
    return axios.get(apiConstants.CATEGORIES_URL + `/${id}`);
}

export const loginUser = (data) => {
    return axios.get(apiConstants.LOGIN_URL, { headers: { Authorization: "Basic " + btoa(data.email + ":" + data.password) } });
}



//ADMIN PRODUCT APIS
export const postProduct = (product) => {
    return axios.post(apiConstants.ADMIN_PRODUCT_URL, product);
}

export const editProduct = (product, id) => {
    return axios.put(apiConstants.ADMIN_PRODUCT_URL + `/${id}`, product);
}

export const deleteProduct = (id) => {
    return axios.delete(apiConstants.ADMIN_PRODUCT_URL + `/${id}`);
}

//ADMIN CATEGORIES ROUTES

export const postCategory = (category) => {
    return axios.post(apiConstants.ADMIN_CATEGORY_URL, category);
}

export const editCategory = (category, id) => {
    return axios.put(apiConstants.ADMIN_CATEGORY_URL + `/${id}`, category);
}

export const deleteCategory = (id) => {
    return axios.delete(apiConstants.ADMIN_CATEGORY_URL + `/${id}`);
}

//ADMIN REGISTRATION AND LOGIN ROUTES
export const registerAdmin = (data) => {
    return axios.post(apiConstants.ADMIN_REGISTER_URL, data);
}

