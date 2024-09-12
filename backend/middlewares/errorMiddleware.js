const globalError = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status
    res.status(err.statusCode).json({
        status:err.status,
        err:err,
        message:err.message,
        stack:err.stack,
    })
}
module.exports = globalError;