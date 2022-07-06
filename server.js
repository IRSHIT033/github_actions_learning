const express=require('express')
const app=express();
app.get('/name',(req,res)=>{
    res.send("Irshit");
})

app.listen(5000,()=>{
  console.log("sever is running on port 5000");
})