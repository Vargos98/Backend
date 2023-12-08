const express = require('express');
const app = express();
const port = 3000;


app.use((req,res,next)=>{
    console.log("Hi im the middleware");
    next();
})



app.get('/', (req,res)=>{

    res.send("hello world");

});

app.get('/profile', (req,res)=>{

    res.send("hello from profile");

});

app.get('/contact', (req,res)=>{

    res.send("hello from contact");

});


app.listen(port);