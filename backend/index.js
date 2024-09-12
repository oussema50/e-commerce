const express = require('express');
const dotenv = require("dotenv");
const morgan = require('morgan');
const mongoose = require('mongoose');
const ApiError = require('./utils/apiError')
const app = express();
const categoryRoute = require('./routes/categoryRoute');
const globalError = require('./middlewares/errorMiddleware');
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
    console.log('development')
}

app.use(express.json())

//Route
app.use('/api/v1/category',categoryRoute)

app.use('*',(req,res,next)=>{
    next(new ApiError(`can't find this URL: ${req.originalUrl}`,400))
})

// Global Error Handling middleware
app.use(globalError)

mongoose.connect(process.env.DB_URI).then(()=>{
    console.log('db connect')
    app.listen(PORT,()=>{
        console.log(`server listening on ${PORT}`);
    })
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})
