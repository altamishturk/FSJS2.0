import fatchRequest from "../../utils/fatchRequest";
import {GET_ALL_USERS,UPDATE_USER} from "../../Constants/actions";
import {toast} from "react-toastify";
import {domainName} from "../../Constants/constants.js";

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

