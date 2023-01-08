import productReducer from "./product";
import usersReducer from "./user";
import authReducer from "./auth";
import cartReducer from "./cart";


const rootReducer = {
    products: productReducer,
    users: usersReducer,
    loggedInUser: authReducer,
    cart: cartReducer
};


export default rootReducer;