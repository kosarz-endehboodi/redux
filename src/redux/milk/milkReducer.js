
import { BUY_MILK } from "./mikType";

const initialState = {
    numOfMilk: 30,
};

export default function milkReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_MILK: {
            return {
                ...state,
                numOfMilk: (state.numOfMilk - action.payload >= 0) ? state.numOfMilk - action.payload : "0",
            }
        }
        default: return state;
    }
}