import React, {Fragment, useEffect} from 'react';
import "./Home.css"
import ProductCard from "./ProductCard"
import { CgMouse } from "react-icons/cg";
import MetaData from '../layout/MetaData';
import {clearErrors, getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "@blaumaus/react-alert";


const Home = () => {
  const alert= useAlert()
  const dispatch = useDispatch();
  const {loading, error, products, productsCount} = useSelector(
    (state) => state.products);
  
  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
  <Fragment>
    {loading ? 
    (<Loader/>
    ): (
    <Fragment>
    <MetaData title="E-Commerce"/>
      <div className="banner">
            <p></p>
            <h1></h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
        </div>
          <h2 className='homeHeading'>Featured Products</h2>
        <div className='container' id="container">
          {products && products.map((product) => <ProductCard product={product}/>
          )}

        </div> 
   </Fragment>)}
  </Fragment>
  )
};

export default Home;