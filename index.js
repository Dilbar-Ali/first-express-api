const express =require("express");
const app=express();
const port=8080;
// app.use('/api/v1')


app.listen(port,()=>{
    console.log("App is running on port ", port);
})