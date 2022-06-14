const express = require("express");

const app = express ();

const cookieParser = require("cookie-parser")

const ErrorMiddleware = require("./middlewares/error")

app.use(express.json());
app.use(cookieParser());
//Routes

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user)
//Middleware for Errors
app.use(ErrorMiddleware);

module.exports = app