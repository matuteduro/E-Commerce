const ErrorHander = require("../utils/errrorhander");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAunthenticatedUser = catchAsyncErrors( async(req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHander("Please Login to acess this resource",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
});
