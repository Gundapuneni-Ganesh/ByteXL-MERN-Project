console.log("welcome to expressjs")
const express=require("express")
const app=express()
const port=3000
app.listen(port,()=>{
    console.log("this server is running succesfully")
})
/* here we use the use method for giving the condition,if the condition is satisfy then only the other middleware or router will execute
here next function is for the execute the code if condition is satisfy or else it will wont get
// app.use((req,res,next)=>{
//     if(10<20){
//         next()
//     }
// })
*/


//or else we can we use different way for finding the condition without using use method

const firstcondition=(req,res,next)=>{
    10 > 20 ? next() : console.log("this terminated")
}

const secondcondition=(req,res,next)=>{
    50 > 20 ? next() : console.log("this terminated")
}
const thirdcondition=(req,res,next)=>{
    10 > 20 ? next() : console.log("this terminated")
}
const fourthcondition=(req,res,next)=>{
    30 > 20 ? next() : console.log("this terminated")
}


//in this api we write the variable name.in that variable the condition is defined
app.get('/apple',firstcondition,(req,res)=>{
    res.send("we execute the function")
})
app.get("/home",secondcondition,(req,res)=>{
    res.send("this is home page")
})
app.get("/about",thirdcondition,(req,res)=>{
    res.send("this is about page")
})
app.get("/user/:121",fourthcondition,(req,res)=>{
    res.send("your are searched for 121")
})
// app.get('/apple',(req,res)=>{
//     res.send("we execute the function")
// })
// app.get("/home",(req,res)=>{
//     res.send("this is home page")
// })
// app.get("/about",(req,res)=>{
//     res.send("this is about page")
// })
// app.get("/user/:121",(req,res)=>{
//     res.send("your are searched for 121")
// })