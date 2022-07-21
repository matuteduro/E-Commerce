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
import Cart from "./components/Cart/Cart";
import Shipping from "./components/Cart/Shipping.jsx";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import OrderSuccess from "./components/Cart/OrderSuccess";
import StripeContainer from './components/Cart/StripeContainer';
import MyOrders from './components/Order/MyOrders';
import OrderDetails from './components/Order/OrderDetails';
import Dashboard from "./components/Admin/Dashboard";
import ProductList from "./components/Admin/ProductList";
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from "./components/Admin/UpdateProduct";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";
import UserList from "./components/Admin/UserList";
import UpdateUser from "./components/Admin/UpdateUser";
import ProductReviews from "./components/Admin/ProductReviews";
import Contact from "./components/layout/Contact/Contact";
import About from "./components/layout/About/About";


function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
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
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/password/forgot" element={<ForgotPassword/>}/> 
        <Route path="/password/reset/:token" element={<ResetPassword/>}/> 
        <Route path="/login" element={<LoginSignUp/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/account" element={<Profile/>}/>
          <Route path="/account" element={<Profile/>}/>
          <Route path="/me/update" element={<UpdateProfile/>}/>
          <Route path="/password/update" element={<UpdatePassword/>}/>
          <Route path="/shipping" element={<Shipping/>}/>
          <Route path="/order/confirm" element={<ConfirmOrder/>}/>
          <Route  path="/process/payment" element={<StripeContainer/>}/>
          <Route path="/success" element={<OrderSuccess/>}/>
          <Route path="/orders" element={<MyOrders/>}/>
          <Route path="/order/:id" element={<OrderDetails/>}/>
          <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard/>}/>
          <Route isAdmin={true} path="/admin/products" element={<ProductList/>}/>
          <Route isAdmin={true} path="/admin/product" element={<NewProduct/>}/>
          <Route isAdmin={true} path="/admin/product/:id" element={<UpdateProduct/>}/>
          <Route isAdmin={true} path="/admin/orders" element={<OrderList/>}/>
          <Route isAdmin={true} path="/admin/order/:id" element={<ProcessOrder/>}/>
          <Route isAdmin={true} path="/admin/users" element={<UserList/>}/>
          <Route isAdmin={true} path="/admin/user/:id" element={<UpdateUser/>}/>
          <Route isAdmin={true} path="/admin/reviews" element={<ProductReviews/>}/>
        </Route>
      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
