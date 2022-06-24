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
    const productsCount = await Product.countDocuments();
    
    const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
    const products = await apiFeature.query;
    

    res.status(201).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
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
        product,
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

// Create New Review or Update the Reveiw

exports.createProductReview = catchAsyncErrors(async (req, res, next) =>{
    const {rating, comment, productId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment, 
    };

    const product = await Product.findById(productId);
        const isReviewed = product.reviews.find(
            (rev)=> rev.user.toString()===req.user._id.toString())
        if(isReviewed){
            product.reviews.forEach(rev =>{
                if(rev.user.toString()===req.user._id.toString())
                rev.rating=rating,
                rev.comment=comment
            })
        }else{
            product.reviews.push(review)
            product.numOfReviews = product.reviews.length
        }
    
        let avg = 0;

        product.reviews.forEach(rev=>{
            avg+=avgrev.rating
        }) 
        
        product.ratings = avg / product.reviews.length;

        await product.save({validateBeforeSave: false});

        res.status(200).json({
            success: true
        })
})

// Get all reviews of a product

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.id);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    res.status(200).json({
      success: true,
      reviews: product.reviews,
    });
  });

// Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);
  
    if (!product) {
      return next(new ErrorHander("Product not found", 404));
    }
  
    const reviews = product.reviews.filter(
      (rev) => rev._id.toString() !== req.query.id.toString()
    );
  
    let avg = 0;
  
    reviews.forEach((rev) => {
      avg += rev.rating;
    });
  
    let ratings = 0;
  
    if (reviews.length === 0) {
      ratings = 0;
    } else {
      ratings = avg / reviews.length;
    }
  
    const numOfReviews = reviews.length;
  
    await Product.findByIdAndUpdate(
      req.query.productId,
      {
        reviews,
        ratings,
        numOfReviews,
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
  
    res.status(200).json({
      success: true,
    });
  });
  