// require('dotenv').config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
dotenv.config({path:"./evn"})

const Port = process.env.PORT || 8000

const app = express()

connectDB()

.then(() => {
  
  app.on(("error", (error)=>{
    console.log("Error : ",error );
    throw error
    
  }))

  app.listen(Port,()=> {
    console.log(`Server is running at port : ${Port}`);  
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!! " + err);
  
})





/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
*/
