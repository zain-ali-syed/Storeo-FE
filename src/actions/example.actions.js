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


