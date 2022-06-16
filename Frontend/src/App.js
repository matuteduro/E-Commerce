import './App.css';
import Header from "./components/layout/Header/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from "react";
import WebFont from 'webfontloader';
import Footer from "./components/layout/Footer/Footer"
import Home from "./components/Home/Home";
import Loader from "./components/layout/Loader/Loader"



function App() {
  React.useEffect(() => {

    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/sad" element={<Loader/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
