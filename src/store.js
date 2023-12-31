import { applyMiddleware, createStore } from "redux";
// import cakeReducer from "./redux/cake/cakeReducer";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;