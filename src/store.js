import { createStore } from "redux";
// import cakeReducer from "./redux/cake/cakeReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer)
export default store;