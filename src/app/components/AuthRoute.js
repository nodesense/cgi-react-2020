//app/components/AuthRoute.js
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

// Higher order component, a component wraps another component

function AuthRoute({authenticated, path, exact, component}) {
    //const Component = component;

    return authenticated? (
                             <Route path={path} exact={exact} component={component} />   
                          )
                        : (
                            <Redirect to="/login" />
                        )
}


function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps) (AuthRoute);