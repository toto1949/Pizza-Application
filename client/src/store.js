import {applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import { legacy_createStore as createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllPizzasReducer} from "./reducers/pizzaReducers";

const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer
})
const initialState = {};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
    finalReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;