 import express from "express"
 import dotenv from "dotenv"
 import mongoose from "mongoose"
 dotenv.config()
 const app= express()
app.use(express.json())
mongoose.connect(process.env.MONGODB_URI)
.then((data)=>{
    console.log("mongodb connected ");
    
})
 app.listen(process.env.PORT,()=>{
    console.log(`server active on ${process.env.PORT} `);
    
 })

 //Yqhv98Q1jSjqocku