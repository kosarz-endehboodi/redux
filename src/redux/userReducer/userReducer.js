import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType";

const initialState = {
    loading: false,
    data: [],
    error: "",
};
export default function userReducer(state, action) {
    switch (action.type) {
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true,
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            error: "",
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading: false,
            data: [],
            error: action.payload,
        }
        default:
            return state;
    }
}

//fetch user is an async action (side effect)=>redux-thunk
//1. request
//2.success
//3.failure


//sub action