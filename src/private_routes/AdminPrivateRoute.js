import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const AdminPrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (user.role === "admin" ? <Component {...props} /> : <Redirect to="/admin/login" />)
    }} />
)


export default AdminPrivateRoute;