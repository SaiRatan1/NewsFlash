const express = require('express')
const app = express()

app.get('home',(req,res)=>{
    console.log('hello in home')
    res.send('hello')
    
})



app.listen(8080,()=>{
    console.log('Server is running on port: 8080')
})