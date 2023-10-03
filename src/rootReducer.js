import { combineReducers } from "redux";
import cakeReducer from "./redux/cake/cakeReducer";
import milkReducer from "./redux/milk/milkReducer";
import userReducer from "./redux/userReducer/userReducer";

const rootReducer= combineReducers(
    {
        cake: cakeReducer,
        milk: milkReducer,
        user:userReducer,
    }
)

export default rootReducer;