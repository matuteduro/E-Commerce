import React, { Fragment, useEffect, useState } from "react"
import "./Products.css"
import {useSelector, useDispatch} from "react-redux";
import { clearErrors, getProduct, getProductDetails } from '../../actions/productAction';
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import {Slider} from "@mui/material";
import {Typography} from "@mui/material";



const Products = ({}) => {
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 25000]);
    const {products,loading,error,productsCount, resultPerPage,filteredProductsCount} = useSelector((state) => state.products)

    const {keyword} = useParams();

    const setCurrentPageNo = (e)=>{
        setCurrentPage(e)
    }

    const priceHandler = (event, newPrice) => {
        console.log(newPrice)
        setPrice(newPrice);
    }

useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price))
}, [dispatch, keyword,currentPage, price]);

let count = filteredProductsCount;

  return <Fragment>
    {loading?<Loader /> : <Fragment>
        <h2 className="productsHeading">Products</h2>

    <div className="products">
        {products && products.map((product) => (
            <ProductCard key={product._id} product={product} />
        ))}
    </div>

   <div className="filterBox">
    <Typography>Price</Typography>
    <Slider 
        getAriaLabel={() => 'Temperature range'}
        value={price}
        onChange={priceHandler}
        valueLabelDisplay="auto"
        min={0}
        max={25000}
    />
   </div>
    {resultPerPage < count && (
        <div className="paginationBox">
        <Pagination
        activePage={currentPage}
        itemsCountPerPage={resultPerPage}
        totalItemsCount={productsCount}
        onChange={setCurrentPageNo}
        nextPageText="Next"
        prevPageText="Prev"
        firstPageText="1st"
        lastPageText="Last"
        itemClass="page-item"
        linkCLass="link"
        activeClass="pageItemActive"
        activeLinkClass="pageLinkActive"

        />
    </div>
    )}
    </Fragment> 
    }
  </Fragment>
}

export default Products