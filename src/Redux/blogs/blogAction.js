import { FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./blogTypes"
import axios from 'axios'

export const fetchUsersRequest = () =>{
    return{
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUsersFailure = error =>{
    return{
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

export const fetchUsers = () =>{
    return (dispatch) => {
        dispatch (fetchUsersRequest)
            axios.get('https://5fb910462f145f0016c3ca6b.mockapi.io/blogs')
            .then(response => {
                const users = response.data
                console.log(users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}