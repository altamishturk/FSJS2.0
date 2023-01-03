import "./App.css";
import Navbar from "./lauout/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./lauout/Footer";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoutes";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Admin from "./pages/admin/Admin";
import {getAll} from "./store/ActionCreators/product";
import {useDispatch} from "react-redux";
import {useEffect} from "react"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll())
  }, []);
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
              <Route excet path="/admin/*" element={<Admin />}/>  
            </Route>   

          </Routes>
        </BrowserRouter>
    

      </div>
    </>
  );
}

export default App;
