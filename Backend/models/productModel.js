const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
    name:{
        type:String, required: true, unique: true
    },
    description:{
        type: String, required: true,
    },
    price:{
        type:Number, required: true,
    },
    images:[
        {public_id:{
            type:String, required: true,
            },
        url:{
            type:String, required: true,
            }
        }
    ],
    category:{
        type:String,

    },
    Stock:{
        type:Number,
        default: 1
    },

    createdAt:{
        type:Date,
        default:Date.now
    },
});


module.exports = mongoose.model("Product", productSchema);