import fatchRequest from "../../utils/fatchRequest";
import {GET_ALL_USERS,LOGIN_USER,RESET_CART,UPDATE_USER} from "../../Constants/actions";
import {toast} from "react-toastify";
import {domainName} from "../../Constants/constants.js";
import {getCart} from "./cart"
import setToken from "../../utils/setToken";

export const createUser = (user) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users`,"POST",user);
        if(res.success){
            toast.success("Account Created And Login Success!");
            setToken(res.token);
            dispatch({type:LOGIN_USER,payload:res.user});
            dispatch({type:RESET_CART,payload:""});
        }
        else {
            toast.error(res.message);
        }
    } catch (error) {
        
    }

    // console.log(res);
}


export const updateUser = (user) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users/${user._id}`,"PUT",user)
        if(res.success){
            dispatch({type:UPDATE_USER,payload:res})
        }
        else{
            toast.error(res.message);
        }
    } catch (error) {
        
    }

    // console.log(res);
}


export const getLoggedInUser = () => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users/loggedIn`,"GET")
        // console.log(res);
        if(res.success){
            dispatch({type:LOGIN_USER,payload:res.user})
            dispatch(getCart(res.user._id));
        }
        else {
            toast.error(res.message);
        }
    } catch (error) {
        
    }

    // console.log(res);
}


export const getAllUsers = () => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/users`,"GET")
        if(res.success){
            dispatch({type:GET_ALL_USERS,payload:res.users})
        }
        else{
            toast.error(res.message);
        }
    } catch (error) {
        
    }
}



