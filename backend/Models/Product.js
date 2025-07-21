 import mongoose from "mongoose"
  const productSchema= new mongoose.Schema({
    name:String,
    pieces:Number,
    image:String,
    price:Number
  })

  export const Product = mongoose.model("Product", productSchema);