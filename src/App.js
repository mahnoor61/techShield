import "./App.css";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from './components/Contact';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Design6 from "./components/d6";
import Design5 from "./components/d5";
import Design4 from "./components/d4";
import Design3 from "./components/d3";
import Design2 from "./components/d2";
import Design1 from "./components/d1";
import Footer from "./components/Footer";

const navbarLinks = [
  { name: "Home", link: "/" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" },
 
];

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar navbarLinks={navbarLinks}/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/contact"  element={<Contact/>}/>
          <Route exact path='/design6' element={<Design6/>}/>
          <Route exact path='/design5' element={<Design5/>}/>
          <Route exact path='/design4' element={<Design4/>}/>
          <Route exact path='/design3' element={<Design3/>}/>
          <Route exact path='/design2' element={<Design2/>}/>
          <Route exact path='/design1' element={<Design1/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
