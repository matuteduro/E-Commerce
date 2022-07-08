import './App.css';
import Header from "./components/layout/Header/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import WebFont from 'webfontloader';
import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import Products from "./components/Product/Products";
import Search from "./components/Product/Search";
import LoginSignUp from './components/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userAction';
import UserOptions from "./components/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile";
import ProtectedRoute from './components/Route/ProtectedRoute';
import UpdateProfile from "./components/User/UpdateProfile";
import UpdatePassword from "./components/User/UpdatePassword";
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from "./components/User/ResetPassword";
import Cart from "./components/Cart/Cart"
import Shipping from "./components/Cart/Shipping.jsx"
import ConfirmOrder from "./components/Cart/ConfirmOrder"
import Payment from "./components/Cart/Payment"
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  const stripePromise = loadStripe("pk_test_51L8Y0MDdyp9PYD2aKshfHc4dAcJ1P5ccm1RLAbC1afNLeQuc7HMdjCoEgMpJ8qc9vopvoQnS5jTyEQU78gaTrBwo00cxdpRkeo"); 

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Router>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:keyword" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route element={<ProtectedRoute/>}/>
          <Route path="/account" element={<Profile/>}/>
        <Route element={<ProtectedRoute/>}/>
         <Route path="/me/update" element={<UpdateProfile/>}/>
        <Route element={<ProtectedRoute/>}/>
         <Route path="/password/update" element={<UpdatePassword/>}/>
        <Route path="/password/forgot" element={<ForgotPassword/>}/> 
        <Route path="/password/reset/:token" element={<ResetPassword/>}/> 
        <Route path="/login" element={<LoginSignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route element={<ProtectedRoute/>}/>
         <Route path="/shipping" element={<Shipping/>}/>
        <Route element={<ProtectedRoute/>}/>
         <Route path="/order/confirm" element={<ConfirmOrder/>}/>

         <Route element={<ProtectedRoute/>}/>
          <Route  path="/process/payment" element={ <Elements stripe={stripePromise} options={options}><Payment/></Elements>}/>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
