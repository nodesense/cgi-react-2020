// app/containers/Header.js
// connect is bridge between react and redux
import {connect} from 'react-redux';
import * as actions from '../auth/state/actions/auth.actions';

import Header from '../components/Header';

// authenticated or not
// identity
// state = getState()
// called by container component automatically
const mapStateToProps = (state) => {
    // return props from state
    // these props are passed to header component
    return {
        authenticated: state.auth.authenticated,
        identity: state.auth.identity
    }
}

// how to handle dispatch?
const mapDispatchToProps = (dispatch) => {
    // returns a set of props which are functions which can make dispatch from here
    return {
        login: function(username, password) {
            // call the thunk and dispatch the thunk function callback
            const actionFunc = actions.login(username, password)
            dispatch(actionFunc)
        },
        logout: () => {
            dispatch(actions.logout());
        }
    }
}


// Wrapper component/Higher order component
// container component, wraps Header with mapStateToProps, mapDispatchToProps
const HeaderWrapper = connect(mapStateToProps, mapDispatchToProps) (Header);

export default HeaderWrapper;