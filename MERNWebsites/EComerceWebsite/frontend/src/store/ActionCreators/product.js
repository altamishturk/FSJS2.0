import {domainName} from "../../Constants/constants.js";
import fatchRequest from "../../utils/fatchRequest";
import {ADD_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, UPDATE_PRODUCT} from "../../Constants/actions";
import {toast} from "react-toastify";

export const getAllProducts = () => async (dispatch) =>{

    try {
        
        const res = await fatchRequest(`${domainName}/products`,"GET")
        
        dispatch({type:GET_ALL_PRODUCTS,payload:res})
    } catch (error) {
        
    }

    // console.log(res);
}


export const createProduct = (product) => async (dispatch) =>{

    try {
        delete product._id;
        delete product.__v;
        const res = await fatchRequest(`${domainName}/products`,"POST",product)
        if(res.errors){
            toast.error(res.message)
            return;
        }
        else{
            toast.success("Product Created Successfully!")
            dispatch({type:ADD_PRODUCT,payload:res})
        }
        

    } catch (error) {
        
    }

    // console.log(res);
}

export const updateProduct = (product) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/products/${product._id}`,"PUT",product)
        if(res.errors){
            toast.error(res.message)
            return;
        }
        else{
            toast.success("Product Updateed Successfully!")
            dispatch({type:UPDATE_PRODUCT,payload:res})
        }
        

    } catch (error) {
        
    }
}

export const deleteProduct = (productId) => async (dispatch) =>{

    try {
        const res = await fatchRequest(`${domainName}/products/${productId}`,"DELETE",{})
        if(res.errors){
            toast.error(res.message)
            return;
        }
        else{
            toast.success("Product Deleted Successfully!")
            dispatch({type:DELETE_PRODUCT,payload:productId})
        }
        

    } catch (error) {
        
    }
}


