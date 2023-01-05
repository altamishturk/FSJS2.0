import fatchRequest from "../../utils/fatchRequest";
import setToken from "../../utils/setToken";
import { LOGIN_USER, LOGOUT_USER } from "../../Constants/actions";
import {toast} from "react-toastify";
import {domainName} from "../../Constants/constants.js";



export const loginUser = (user) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/auth/login`,"POST",user)
        
        // console.log(res);
        if(res.errors){
            toast.error(res.message);
            return;
        }
        else {
            toast.success("Login Success!");
            setToken(res.token);
            dispatch({type:LOGIN_USER,payload:res.user})
        }
    } catch (error) {
        
    }

    // console.log(res);
}



export const logoutUser = () => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/auth/logout`,"POST",{})
        if(res.errors){
            toast.error(res.message);
            return;
        }
        else{
            setToken(undefined);
            toast.success("Logout Success!")
            dispatch({type:LOGOUT_USER,payload:null})
        }
    } catch (error) {
        
    }

    // console.log(res);
}