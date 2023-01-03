import {domainName} from "../../Constants/constants.js";
import fatchRequest from "../../utils/fatchRequest";
import {GET_ALL_PRODUCTS} from "../../Constants/actions";


export const getAll = () => async (dispatch) =>{

    try {
        
        const res = await fatchRequest(`${domainName}/products`,"GET")
        
        dispatch({type:GET_ALL_PRODUCTS,payload:res})
    } catch (error) {
        
    }

    // console.log(res);
}


