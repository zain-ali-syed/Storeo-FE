// import { usersConstants } from '../constants/users.constants';

// export const login = (data) => ({
//   type: usersConstants.LOGIN,
//   api: { 
//     endpoint: '/sign-in',
//     method: 'GET', 
    
//     headers: {
//       Authorization: 'Basic ' + btoa(data.username + ":" + data.password)
//     },
//   },
// });

// export const logout = () => ({
//   type: usersConstants.LOGOUT,
// });

// export const register = (data) => ({
//   type: usersConstants.REGISTER,
//   api: {
//     endpoint: '/users',
//     method: 'POST',
//     body: data
//   },
// });

export const getCateg = (data) => ({
  type: 'GET_CATEGORIES',
  data
})

export const getProdByCatId = (data) => ({
  type: 'GET_PROD_BY_CAT_ID',
  data
})

export const addToBasket = (product, quantityToAdd) => ({
  type: 'ADD_TO_BASKET',
  product: product,
  quantityToAdd: quantityToAdd
})

export const deleteFromBasket = (id) => ({
  type: 'DELETE_FROM_BASKET',
  id
})

export const changeQuantity = (qty, id) => ({
  type: 'CHANGE_PRODUCT_QTY_IN_BASKET',
  qty: qty,
  id: id
})