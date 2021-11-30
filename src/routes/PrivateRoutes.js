import React from 'react';
//import {connect} from 'react-redux';
import { Route } from 'react-router-dom';

const PrivateRoute = ({element: Component, ...rest}) => {
    return 
       // <Route {...rest} render={props => (isLogin() ? <Component {...props}/> : <Redirect to='/'/>)}/>
    
}

export default PrivateRoute
