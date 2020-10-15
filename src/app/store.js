import {createStore, combineReducers} from 'redux';

import {authReducer} from './auth/state/reducers/authReducer';
import * as actions from './auth/state/actions/auth.actions';


// while creating store, store first calls authReducer with undefined state to initialize default value
// for undefined state arg, reducer shall use default value INITIAL_STATE
// (state = INITIAL_STATE, action)
// const store = createStore(authReducer);

// store needs multiple reducers, separation of concerns
// each reducer manages its own state

// combineReducers accept multiple reducers to form one root reducer

// state {auth: {identity: {}, authenticated: false }}
const rootReducer = combineReducers({
    // stateName: reducerFunction
    auth: authReducer,
    //cart: cartReducer,
    //product: productReducder,
    // .....
})

const store = createStore(rootReducer)

// STORE CODE END
// -----

// REDUX EXAMPLE here start
console.log("redux example code")

// How to take data/query from store, store.getState()
console.log("STATE ", store.getState())


// susbcribe accepts the callback
// after the dispatch, after the store is updated, 
// the subscribe calls are invoved in SYNC way
// who calls subscribe? dispatch, at the end of the dispatch call
// other components who needs the store updates, susbcribe from store
// SUBSCRIBE WILL NOT KNOW WHAT DATA GOT CHANGED
// It has to call getState() and try to do a comparion to know the diff
// subscribers called no matter whether data got changed or not, simply invoked at end of the dispatch
store.subscribe ( () => {
    //callback
    console.log("Subscribe1 callback called");
    // to get update/query
    console.log("STATE SUB1", store.getState())
    // any changes are detected by subscriber
})

store.subscribe ( () => {
    //callback
    console.log("Subscribe2 callback called");
})

//loginSucceeded is a Action Creators, create action loginSuccessAction
const loginSuccessAction = actions.loginSucceeded({username: 'venkat', email: 'venkat@example.com'})
console.log("LOGIN SUCCESS DISPATCH ", loginSuccessAction)

//dispatch shall calls the reducers
// REDUX DISPATCH WORKS SYNC
// 1. dispatch
// 2. calls reducers
// 3. update the state in the store
// 4. call subscribers callback
// 5. then call exit
store.dispatch(loginSuccessAction)

console.log("STATE ", store.getState())

// TODO: LOGOUT
store.dispatch(actions.logout())

console.log("STATE ", store.getState())