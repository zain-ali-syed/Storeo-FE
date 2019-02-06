import { apiConstants } from '../constants/api.constants'
import axios from 'axios';




export const getHeader = () => {
    var token;
    const user = localStorage.getItem('user');
    if (user) token = JSON.parse(user).token;
    return { "Authorization": `Bearer ${token}` };
}



//COMMON ADMIN AND CLIENT APIS

export const getProducts = (id) => {
    if (!id) return axios.get(apiConstants.PRODUCTS_URL);
    return axios.get(apiConstants.PRODUCTS_URL + `/${id}`);
}

export const getSearchProducts = (searchQuery) => {
    console.log('IN API FUNCTION', searchQuery);
    return axios.get(apiConstants.USER_SEARCH_PRODUCTS + `${searchQuery}`
    );
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

export const registerUser = (data) => {
    return axios.post(apiConstants.USER_REGISTER_URL, data);
}

export const addAddress = (data) => {
    return axios.post(apiConstants.CUSTOMER_POST_NEW_ADDRESS, data, { headers: getHeader() });
}

export const getOrders = () => {
    return axios.get(apiConstants.CUSTOMER_GET_ORDERS, { headers: getHeader() });
}



//ADMIN PRODUCT APIS
export const postProduct = (product) => {
    return axios.post(apiConstants.ADMIN_PRODUCT_URL, product);
}

export const editProduct = (product, id) => {
    console.log("edit product ", apiConstants.ADMIN_PRODUCT_URL + `/${id}`)
    return axios.put(apiConstants.ADMIN_PRODUCT_URL + `/${id}`, product);
}

export const deleteProduct = (id) => {
    return axios.delete(apiConstants.ADMIN_PRODUCT_URL + `/${id}`);
}

//ADMIN GET ALL ORDERS

export const getAllOrders = () => {
    return axios.get(apiConstants.ADMIN_GET_ORDERS, { headers: getHeader() });
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

// CUSTOMER API
export const postNewOrder = (data, header) => {
    return axios.post(apiConstants.CUSTOMER_POST_NEW_ORDER, data, { headers: getHeader() });
}
