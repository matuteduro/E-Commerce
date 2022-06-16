import React, {Fragment, useEffect} from 'react';
import "./Home.css"
import Product from "./Product"
import { CgMouse } from "react-icons/cg";
import MetaData from '../layout/MetaData';
import {getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader"
import {useAlert} from "@blaumaus/react-alert"


const Home = () => {
  const alert= useAlert()
  const dispatch = useDispatch();
  const {loading, error, products, productsCount} = useSelector(
    (state) => state.products);
  
  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
  <Fragment>
    {loading ? (<Loader/>): (<Fragment>
    <MetaData title="E-Commerce"/>
      <div className="banner">
            <p>JUST DO IT</p>
            <h1>DURODEV STORE</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
        </div>
          <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id="container">
          {products && products.map((product) => <Product product={product}/>
          )}

        </div> 
   </Fragment>)}
  </Fragment>
  )
};

export default Home;