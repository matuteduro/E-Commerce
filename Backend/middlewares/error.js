const ErrorHandler = require("../utils/errrorhander");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500,
    err.mesage = err.message || "Internal Server Error";

// Wrong Mongodb Id error
    if(err.name === "CastError"){
        const message = `Resource not Found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }


    res.status(err.statusCode).json({
        sucess: false,
        message: err.message,
    })
}