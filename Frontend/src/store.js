import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { MensReducer } from "./AllProductPage/mens/redux/reducer";

const rootReducer = combineReducers({
  MensReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
