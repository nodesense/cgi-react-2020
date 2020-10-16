// app/pages/Favorites.js
import React, {useReducer, useCallback, useState} from 'react';

//action-types.js
const FAVORITE_ADD = '[favorite add]';
const FAVORITE_REMOVE = '[favorite remove]';
const FAVORITE_RESET = '[favorite reset]';

//reducer.js
const reducer = (state, action) => {
    switch(action.type) {
        case FAVORITE_ADD: {
            const favorites = [...state.favorites, action.item]
            // code logic may be here
            return {
                ...state,
                favorites,
                count: favorites.length
            }
        }
        break;
        case FAVORITE_REMOVE: {
            const favorites = state.favorites.filter (favorite => favorite.id !== action.id)
            return {
                ...state,
                favorites,
                count: favorites.length
            }
        }
        break;
        case FAVORITE_RESET:  return {...state, favorites: [], count: 0}
        default: return state; // throw exception if needed, but you need to handle the exception
    }
}

class Summary extends React.Component {
    render() {
        console.log("Summary render")
        return (
            <div>
                <p>Total Items {this.props.count}</p>

            <button onClick={ ()=> this.props.updateItem(1, true)}>Update example</button>
            <button onClick={ ()=> this.props.removeItem(1)}>Remove example</button>
            
            </div>
        )
    }

    shouldComponentUpdate(prevProps, prevState)  {
        // false, as new removeItem called again and again
        console.log('prevProps.removeItem == this.props.removeItem', 
                prevProps.removeItem == this.props.removeItem)

        // should be true, since memozied callback
        console.log('prevProps.updateItem == this.props.updateItem', 
                prevProps.updateItem == this.props.updateItem)


        return true;
    }
}
 
const INITIAL_STATE = {
    favorites: [],
    count: 0
}


const Favorite = ({favorite, dispatch}) => {
    console.log("Favorite render called ")
    return (
        <div>
            <h2>{favorite.name}</h2>
            <button onClick= { () => dispatch(remove(favorite.id)) }>X</button> 

        </div>
    )
}

const FavoriteList = ({favorites, dispatch}) => {
    console.log("FavoriteList render called ")
    return (
        <div>
            <h4>Favorite List</h4>
            {
                favorites.map (favorite => <Favorite key={favorite.id} 
                                            favorite={favorite} 
                                            dispatch={dispatch}
                                            />)
            }
        </div>
    )
}

// actions.js
// action creators, a function that creates action, helper method
// function add (id, name) { return {type: FAVORITE_ADD, item: {id: id, name: name}}
const add = (id, name) => ({type: FAVORITE_ADD, item: {id, name}})
const remove = (id) => ({type: FAVORITE_REMOVE,  id})
const reset = () => ({type: FAVORITE_RESET})

const Favorites = ({}) => {
    console.log("Favorites render called ")
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    console.log("state ", state)

    const [coupon, setCoupon] = useState("NONE")

    const {favorites, count} = state;

    // function is created every time the functional component invoked
    // creation/updating/re-render
    const removeItem = (id) => {
        console.log("RemoteItem called ", id)
    }

    // Memozied callback function
    const updateItem = useCallback(
        (id, star) => {
           console.log("updatedItem", id, star, "coupon", coupon)
        },
        [coupon],
    );

    // Assignment: Empty
    // Assignment: Remove, pass dispatch as a props to FavoriteList,
                    // FavoriteList to pass to Favorite component

    return (
        <div>
            <h2>Favorites</h2>
            <button onClick={ () => {
                const id = Math.ceil(Math.random() * 100000);
                const action = add(id, `Product ${id}`)
                console.log('dispatching ', action)
                dispatch(action)
            }}>
                    Add
            </button>

            <button onClick={ () => dispatch(reset())}>Reset</button>

            <FavoriteList favorites={favorites} dispatch={dispatch} />

            <Summary count={favorites.length} 
                     removeItem={removeItem} 
                     updateItem = {updateItem}
                     />

            <button onClick= { () => setCoupon("Offer" + Math.ceil(Math.random() * 50))}>
                Set Coupon
            </button>
        </div>
    )
}

export default Favorites;