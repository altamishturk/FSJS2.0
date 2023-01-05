import productReducer from "./product";
import usersReducer from "./user";
import authReducer from "./auth";



const rootReducer = {
    products: productReducer,
    users: usersReducer,
    loggedInUser: authReducer
};


export default rootReducer;