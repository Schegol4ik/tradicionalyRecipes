import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {recipesReducer} from "./reducers/resipes-reducer";


let reducers = combineReducers({
    recipesReducer
})
export type RootState = ReturnType<typeof reducers>


const composeEnhancers =  compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store