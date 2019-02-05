
const serverURL = "http://localhost:3000";

const urlZain = `192.168.1.158:3000`;
const urlUros = `192.168.1.149:3000`;
const urlLuca = `192.168.1.116:3000`;


export const apiConstants = {
  PRODUCTS_BY_CAT: `${serverURL}/products/cat`,
  LOGIN_URL: `${serverURL}/login`,
  USER_REGISTER_URL: `${serverURL}/signup`,
  CATEGORIES_URL: `${serverURL}/categories`,
  PRODUCTS_URL: `${serverURL}/products`,




  ADMIN_REGISTER_URL: `${serverURL}/signup`,
  ADMIN_PRODUCT_URL: `${serverURL}/admin/products`, //POST, PUT, DELETE
  ADMIN_CATEGORY_URL: `${serverURL}/admin/categories`, //POST, PUT, DELETE
  ADMIN_ORDERS_URL: `${serverURL}/admin/orders`

  PRODUCTS_BY_CAT: `http://${urlUros}/products/cat`,
  ADMIN_REGISTER_URL: `http://${urlUros}/signup`,
  LOGIN_URL: `http://${urlUros}/login`,
  USER_REGISTER_URL: `http://${urlUros}/signup`,
  CATEGORIES_URL: `http://${urlUros}/categories`,
  PRODUCTS_URL: `http://${urlUros}/products`,
  ADMIN_PRODUCT_URL: `http://${urlUros}/admin/products`, //POST, PUT, DELETE
  ADMIN_CATEGORY_URL: `http://${urlUros}/admin/categories`, //POST, PUT, DELETE
  ADMIN_ORDERS_URL: `http://${urlUros}/admin/orders`,
  CUSTOMER_POST_NEW_ORDER: `http://${urlLuca}/orders`,
  CUSTOMER_POST_NEW_ADDRESS: `http://${urlUros}/address`,
  PAYMENT: `http://${urlLuca}/charge`

}


