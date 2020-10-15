// app/pages/Favorites.js
import React, {useReducer} from 'react';

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

 
const INITIAL_STATE = {
    favorites: [],
    count: 0
}

const Favorite = ({favorite, dispatch}) => {
    
    return (
        <div>
            <h2>{favorite.name}</h2>
            <button onClick= { () => dispatch(remove(favorite.id)) }>X</button> 
        </div>
    )
}

const FavoriteList = ({favorites, dispatch}) => {
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
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
    console.log("state ", state)

    const {favorites, count} = state;

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
        </div>
    )
}

export default Favorites;