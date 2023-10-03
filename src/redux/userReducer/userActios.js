import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userType";


// function fetchUserRequest(){
//     return{
//         type:FETCH_USERS_REQUEST,
//     };
// }
// function fetchUserSuccess(users){
//     return{
//         type:FETCH_USERS_SUCCESS,
//          payload:users
//     };
// }
// function fetchUserFailure(error){
//     return{
//         type:FETCH_USERS_FAILURE,
//         payload:error
//     };
// }



export function fetchUsers() {
    return (dispatch, getState) => {
        dispatch({ type: FETCH_USERS_REQUEST })
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(({ data }) => dispatch({ type: FETCH_USERS_SUCCESS, payload: data }))
            .catch(err=>dispatch({type:FETCH_USERS_FAILURE,payload:err.message}));
            // err.response.data.message
    };
}
// export const fetch =()=>()=>{}

