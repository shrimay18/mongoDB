const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
    .then(()=>
    {
        console.log("Connected to the database");
    }).catch((err)=>
    {
        console.log("Connection failed",err);
    });
      
app.use("/api/products", productRoute);   
app.use("/api/users", userRoute); 
app.listen(8086, () => {
  console.log("Server sarted at port 8086");
});