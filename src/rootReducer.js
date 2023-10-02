import { combineReducers } from "redux";
import cakeReducer from "./redux/cake/cakeReducer";
import milkReducer from "./redux/milk/milkReducer";

const rootReducer= combineReducers(
    {
        cake: cakeReducer,
        milk: milkReducer,
    }
)

export default rootReducer;