import React,{useState} from "react"
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Copyright from './components/Copyright';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import PortfolioModel from './components/PortfolioModel';

function App() {
  const [portfolioItem, setPortfolioItem] = useState({title:"",description:"",img:""});


  return (
    <>
    {/* <!-- Navigation--> */}
        <Navbar/>

        {/* <!-- Masthead--> */}
        <Hero/>

        {/* <!-- Portfolio Section--> */}
        <Portfolio
        setPortfolioItem={setPortfolioItem}
        />

        {/* <!-- About Section--> */}
        <About/>

        {/* <!-- Contact Section--> */}
        <Contact/>

        {/* <!-- Footer--> */}
        <Footer/>

        {/* <!-- Copyright Section--> */}
        <Copyright/>

        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Portfolio Modal 1--> */}
        <PortfolioModel
        title={portfolioItem.title}
        description={portfolioItem.description}
        img={portfolioItem.img}
        />
    </>
  );
}

export default App;
