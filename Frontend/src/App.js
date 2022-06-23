import './App.css';
import Header from "./components/layout/Header/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from "react";
import WebFont from 'webfontloader';
import Footer from "./components/layout/Footer/Footer"
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails"
import Products from "./components/Product/Products"


function App() {
  React.useEffect(() => {

    WebFont.load({
      google:{
        families: [ "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/product/:id" element={<ProductDetails/>}/>
        <Route exact path="/products" element={<Products/>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
