const express = require('express');
const dotenv = require("dotenv");
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
    console.log('development')
}
app.use('/',(req,res)=>{
    res.send('<h1>hello express</h1>')
})
app.use(express.json())
mongoose.connect(process.env.DB_URI).then(()=>{
    console.log('db connect')
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`);
    })
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})
