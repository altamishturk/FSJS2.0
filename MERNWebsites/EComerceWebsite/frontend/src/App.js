import "./App.css";
import Navbar from "./lauout/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./lauout/Footer";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/CreateProduct";
import StaticesCards from "./pages/admin/StaticesCards";
import ProductsList from "./pages/admin/ProductsList";
import UsersList from "./pages/admin/UsersList";
import OrdersList from "./pages/admin/OrdersList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./store/ActionCreators/product";
import {getLoggedInUser} from "./store/ActionCreators/user";



function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getLoggedInUser());
    dispatch(getAllProducts());
  }, [dispatch]);
  
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route excet path="/" element={<><Navbar/><Home /><Footer /></>} />
            <Route excet path="/login" element={<><Navbar/><Login /><Footer /></>} />
            <Route excet path="/signup" element={<><Navbar/><SignUp /><Footer /></>} />
            <Route excet path="/about" element={<><Navbar/><AboutUs /><Footer /></>} />
            <Route excet path="/contact" element={<><Navbar/><ContactUs /><Footer /></>} />
            <Route excet path="/products" element={<><Navbar/><Products /><Footer /></>} />
            <Route excet path="/product/detail" element={<><Navbar/><ProductDetail /><Footer /></>} />
            <Route excet path="/product/checkout" element={<><Navbar/><Checkout /><Footer /></>} />
             {/* ptivate routes  */}
            <Route excet path="/" element={<><PrivateRoute/></>} >
              {/* admin routes  */}
              <Route path="/admin/dashboard" element={<Admin />}>
                <Route path="" element={<StaticesCards/>}/>
                <Route path="products" element={<ProductsList/>}/>
                <Route path="products/add" element={<CreateProduct/>}/>
                <Route path="products/update/:_id" element={<CreateProduct/>}/>
                <Route path="users" element={<UsersList/>}/>
                <Route path="orders" element={<OrdersList/>}/>
              </Route>   
            </Route>

          </Routes>
        </BrowserRouter>
    

      </div>
    </>
  );
}


export default App;
