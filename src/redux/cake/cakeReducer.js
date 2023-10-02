
import { BUY_CAKE } from "./cakeType";

const initialState = {
    numOfCake: 10,
};

export default function cakeReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                numOfCake: (state.numOfCake - action.payload >= 0) ? state.numOfCake-action.payload : "0",
            }
        }
        default: return state;
    }
}