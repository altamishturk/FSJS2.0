import fatchRequest from "../../utils/fatchRequest";
import {GET_ALL_USERS,LOGIN_USER,UPDATE_USER} from "../../Constants/actions";
import {toast} from "react-toastify";
import {domainName} from "../../Constants/constants.js";


export const createUser = (user) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users`,"POST",user);
        if(res.errors){
            toast.error(res.message);
            return;
        }
        else{
            toast.success("Account Created And Login Success!");
            dispatch({type:LOGIN_USER,payload:res.user})
        }
    } catch (error) {
        
    }

    // console.log(res);
}


export const updateUser = (user) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users/${user._id}`,"PUT",user)
        if(res.errors){
            toast.error(res.message);
            return;
        }
        dispatch({type:UPDATE_USER,payload:res})
    } catch (error) {
        
    }

    // console.log(res);
}


export const getLoggedInUser = () => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users/loggedIn`,"GET")
        console.log(res);
        if(!res.email){
            toast.error(res.message);
            return;
        }
        else{
            dispatch({type:LOGIN_USER,payload:res})
        }
    } catch (error) {
        
    }

    // console.log(res);
}


export const getAllUsers = () => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users`,"GET")
        if(res.errors){
            toast.error(res.message);
            return;
        }
        else{
            // console.log(res);
            dispatch({type:GET_ALL_USERS,payload:res})
        }
    } catch (error) {
        
    }

    // console.log(res);
}



