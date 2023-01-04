import productReducer from "./product";
import userReducer from "./user";



const rootReducer = {
    products: productReducer,
    users: userReducer
};


export default rootReducer;