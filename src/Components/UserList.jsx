import { useEffect, useState } from "react";
import { fetchUsers } from "../redux/userReducer/userActios";
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
    const dispatch = useDispatch();
    const {loading,error,data} = useSelector(state => state.user)
    console.log(data)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    return (
        <>
            <h2>userList</h2>
            {
                loading ? (
                    <p>loading...</p>
                ) :error ? (
                    <p>{state.error}</p>
                ) : (<div>{data && data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
                </div>)
            }


        </>
    );
}