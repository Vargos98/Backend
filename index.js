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

app.get('/profile/umesh', (req,res)=>{

    res.send("hello from umesh");

});
app.get('/profile/Umeshwari', (req,res)=>{

    res.send("hello from umesh");

});
app.get('/profile/umadarling', (req,res)=>{

    res.send("hello from umadarling");

});
app.get('/profile/umabasanti', (req,res)=>{

    res.send("hello from umabasanti");

});

app.get('/profile/:username', (req,res)=>{

    res.send(`hello from ${req.params.username}`);

});

app.use(function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err);
    }
    res.status(500)
    res.render('error', {error:err })
})




app.listen(port);