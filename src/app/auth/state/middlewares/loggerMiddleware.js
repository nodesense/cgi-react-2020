// app/auth/state/middleware/loggerMiddleware.js
 
// ES6
// store => next => action => next(action)

///ES5

// ({getState, dispatch})
function loggerMiddleware(store) { // store createStrore obj
    return function(next) { // for forward the action to next middleware/reducer
        return function(action) { // comes from dispatch(action)
            //called for all dispatch cals
            console.log("LOGGER MIDDLEWARE", action)
            const result = next(action); // forwarding action to next middleware/ or reducer
            return result;
        }
    }
}

export {loggerMiddleware}