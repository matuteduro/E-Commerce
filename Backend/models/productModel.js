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
    rating: {
        type: Number,
        default: 0,
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
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
          name: {
            type: String,
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
        },
      ],

    user: {
        type:mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },  
    createdAt:{
        type:Date,
        default:Date.now
    },
});


module.exports = mongoose.model("Product", productSchema);