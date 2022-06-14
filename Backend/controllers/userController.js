const ErrorHander = require("../utils/errrorhander");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

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

    const token = user.getJWTToken();

    res.status(201).json({
        success: true,
        token,
    })
})


// LOGIN

exports.loginUser = catchAsyncErrors( async (req, res, next) =>{

    const {email,password} = req.body;

    // checking if user has given password and email both

    if(!email || !password){
        return next(new ErrorHander("Please Enter Email & Password", 400))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid Email or Password",401));

    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid Email or Password", 401));

    }

    sendToken(user,201,res);

})

// Logout User

exports.logout = catchAsyncErrors(async(req,res,next)=>{

    req.cookie("token", null,{
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        message: "Logged Out",
    })
})