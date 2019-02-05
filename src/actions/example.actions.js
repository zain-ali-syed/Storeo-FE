

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

export const clearBasket = () => ({
  type: 'CLEAR_BASKET',
})

export const changeQuantity = (qty, id) => ({
  type: 'CHANGE_PRODUCT_QTY_IN_BASKET',
  qty: qty,
  id: id
})

export const saveSearchResult = (listOfProducts) => ({
  type: 'SAVE_SEARCH_RESULT',
  listOfProducts
})

export const userLoggedIn = (user) => ({
  type: 'USER_LOGGED_IN',
  data: user
})