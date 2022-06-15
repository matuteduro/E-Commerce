import React, {Fragment} from 'react';
import "./Home.css"
import Product from "./Product"
import { CgMouse } from "react-icons/cg";
import MetaData from '../layout/MetaData';

const product = {
  name: "Nike hoodie",
  images: [{url: "https://www.tradeinn.com/f/13719/137194767/nike-sportswear-club-hoodie.jpg"}],
  price: "$11000",
  _id: "nikehoodie",
}

const Home = () => {
  return (
  <Fragment>
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
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>

          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>

        </div> 
          

   </Fragment>
  )
};

export default Home;