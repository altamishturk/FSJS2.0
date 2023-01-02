import "./App.css";
import Navbar from "./lauout/Navbar";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./lauout/Footer";
import ContactUs from "./pages/ContactUs/ContactUs.js";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import SideBar from "./pages/admin/SideBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route excet path="/" element={<><Navbar/><Home /><Footer /></>} />
            <Route excet path="/about" element={<><Navbar/><AboutUs /><Footer /></>} />
            <Route excet path="/contact" element={<><Navbar/><ContactUs /><Footer /></>} />
            <Route excet path="/products" element={<><Navbar/><Products /><Footer /></>} />
            <Route excet path="/product/detail" element={<><Navbar/><ProductDetail /><Footer /></>} />
            <Route excet path="/product/checkout" element={<><Navbar/><Checkout /><Footer /></>} />
            <Route excet path="/admin/dashboard" element={<SideBar />} />
          </Routes>
        </BrowserRouter>
    

      </div>
    </>
  );
}

export default App;
