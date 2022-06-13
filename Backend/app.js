const express = require("express");

const app = express ();

const ErrorMiddleware = require("./middlewares/error")

app.use(express.json())

//Routes

const product = require("./routes/productRoute");

app.use("/api/v1", product);

//Middleware for Errors
app.use(ErrorMiddleware);

module.exports = app