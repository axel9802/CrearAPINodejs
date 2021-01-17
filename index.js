const express = require('express');
const bodyParse = require('body-parser');
const apiRouter = require('./routes/api');

const app = express();


require('./data/db');
//Middlewares
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}));
app.use('/api', apiRouter);


app.listen(3000,()=>{
    console.log("Se pudo levantar el servidor")
});

