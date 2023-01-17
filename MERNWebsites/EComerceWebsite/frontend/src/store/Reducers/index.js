import productReducer from "./product";
import usersReducer from "./user";
import authReducer from "./auth";
import cartReducer from "./cart";
import orderReducer from "./order";


const rootReducer = {
    products: productReducer,
    users: usersReducer,
    loggedInUser: authReducer,
    cart: cartReducer,
    orders: orderReducer,
};


export default rootReducer;