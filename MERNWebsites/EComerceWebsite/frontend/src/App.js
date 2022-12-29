import "./App.css";
import Navbar from "./lauout/Navbar";
import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
import Footer from "./lauout/Footer";
// import ContactUs from "./pages/ContactUs";


function App() {
  return <>
    <div className="app">
      <Navbar/>
      <Home/>
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  </>;
}

export default App;
