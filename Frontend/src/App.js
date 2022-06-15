import './App.css';
import Header from "./components/layout/Header/Header"
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";
import WebFont from 'webfontloader';
import Footer from "./components/layout/Footer/Footer"
import Home from "./components/Home/Home";



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
    <Home/>
    <Footer/>
    </Router>
  );
}

export default App;
