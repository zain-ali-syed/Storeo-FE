const url = `192.168.1.158:3000`;

export const apiConstants = {

  PRODUCTS_BY_CAT: `http://${url}/products/cat`,
  ADMIN_REGISTER_URL: `http://${url}/signup`,
  LOGIN_URL: `http://${url}/login`,
  USER_REGISTER_URL: `http://${url}/signup`,
  CATEGORIES_URL: `http://${url}/categories`,
  PRODUCTS_URL: `http://${url}/products`,
  ADMIN_PRODUCT_URL: `http://${url}/admin/products`, //POST, PUT, DELETE
  ADMIN_CATEGORY_URL: `http://${url}/admin/categories`, //POST, PUT, DELETE
  ADMIN_ORDERS_URL: `http://${url}/admin/orders`
}


