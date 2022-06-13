const express = require("express");

const app = express ();

const ErrorMiddleware = require("./middlewares/error")

app.use(express.json())

//Routes

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user)
//Middleware for Errors
app.use(ErrorMiddleware);

module.exports = app