import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/savedReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
