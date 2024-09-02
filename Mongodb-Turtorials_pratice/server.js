const express=require("express")
const app=express()
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/demopratice").then(()=>{
    console.log("data base connect successfully")
})
.catch((err)=>{
    console.log("error in database connection")
})
app.listen(4000,(error)=>{
    if(error){
        console.log("eroor is occured in server")
    }else{
        console.log("err","server started and running")
    }


})
