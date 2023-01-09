import {domainName} from "../../Constants/constants.js";
import fatchRequest from "../../utils/fatchRequest";



export const creatteReview = async (review) =>{

    try {
        
        const res = await fatchRequest(`${domainName}/reviews`,"POST",review);
        
        return res;

    } catch (error) {
        
    }

    // console.log(res);
}


export const getReviewsByProductId = async (productId) =>{

    try {
        
        const res = await fatchRequest(`${domainName}/reviews/product/${productId}`,"GET",);
        
        return res;

    } catch (error) {
        
    }

    // console.log(res);
}