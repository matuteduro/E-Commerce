import React, {Fragment, useEffect} from 'react';
import "./Home.css"
import Product from "./Product"
import { CgMouse } from "react-icons/cg";
import MetaData from '../layout/MetaData';
import {getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";



const product = {
  name: "Nike hoodie",
  images: [{url: "https://www.tradeinn.com/f/13719/137194767/nike-sportswear-club-hoodie.jpg"}],
  price: "$11000",
  _id: "nikehoodie",
}

const Home = () => {
  const dispatch = useDispatch();
  const {loading, error, products, productsCount} = useSelector(
    (state) => state.products);
  
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
  <Fragment>
    {loading ? "loading": <Fragment>
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
   </Fragment>}
  </Fragment>
  )
};

export default Home;