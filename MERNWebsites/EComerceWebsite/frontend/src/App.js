import "./App.css";
import Navbar from "./lauout/Navbar";
import Home from "./pages/Home";
import Footer from "./lauout/Footer";


function App() {
  return <>
    <div className="app">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  </>;
}

export default App;
