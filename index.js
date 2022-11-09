const express =require("express");
const app=express();
const port=8080;
// app.use('/api/v1')

app.get("/pages", async(req,res)=>{
    try{
        res.send("<h1>HEllow Developers </h1>")
        console.log("Hellow Develpers ");

    }
    catch(error){
      
        console.log("The error is occure is ", error)
    }
})

app.listen(port,()=>{
    console.log("App is running on port ", port);
})