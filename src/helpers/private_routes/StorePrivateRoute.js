import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const StorePrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={(props) => {
        return (user.role === "user" ? <Component {...props} /> : <Redirect to="/login" />)
    }} />
)


export default StorePrivateRoute;