const ErrorHander = require("../utils/errrorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const User = require("../models/userModel")

// Register a User

exports.registerUser = catchAsyncErrors( async(req,res,next) => {
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is a sample id",
            url:"profilepicUrl",
        },
    });
    res.status(201).json({
        success: true,
        user,
    })
})