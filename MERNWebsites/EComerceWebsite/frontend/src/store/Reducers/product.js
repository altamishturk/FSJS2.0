import {GET_ALL_PRODUCTS} from "../../Constants/actions";



function product(state=null,action){

    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.payload    
        default:
            return state;
    }

}


export default product;