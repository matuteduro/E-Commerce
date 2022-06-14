const Product = require ("../models/productModel");
const ErrorHander = require("../utils/errrorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const ApiFeatures = require("../utils/apifeatures")

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async(req,res,next) =>{

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});

// Get All Products

exports.getAllProducts = catchAsyncErrors(async(req,res,next) =>{


    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query;
    

    res.status(201).json({
        success: true,
        products,
        productCount,
    })
});

// Get Product Details

exports.getProductDetails = catchAsyncErrors(async(req,res,next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product Not Found", 404))
    }
    res.status(200).json({
        sucess: true,
        product
    })
});

// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async(req,res,next) =>{
    let product = Product.findById(req.params.id);
    if(!product){
        return next(new ErrorHander("Product Not Found", 404))
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true, useFindAndModify:false});
    
    res.status(200).json({
        sucess: true,
        product
    })
});


// Delete Product

exports.deleteProduct = catchAsyncErrors(async(req,res,next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHander("Product Not Found", 404))
    }
    await product.remove();

    res.status(200).json({
        sucess: true,
        message:"Product Delete Successfull"
    })

});