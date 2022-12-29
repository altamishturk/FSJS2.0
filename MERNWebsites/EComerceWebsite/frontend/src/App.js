import "./App.css";
import Navbar from "./lauout/Navbar";
// import Home from "./pages/Home/Home";
// import AboutUs from "./pages/AboutUs/AboutUs.js";
import Footer from "./lauout/Footer";
// import ContactUs from "./pages/ContactUs/ContactUs.js";
// import Checkout from "./pages/Checkout/Checkout";
// import ProductReview from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";


function App() {
  return <>
    <div className="app">
      <Navbar/>
      {/* <Home/> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      {/* <Checkout/> */}
      {/* <ProductReview/> */}
      <Products/>
      <Footer/>
    </div>
  </>;
}

export default App;
