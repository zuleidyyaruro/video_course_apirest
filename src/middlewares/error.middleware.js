const handleError = (error, req, res, next) => {

    const statusCode=error.status || 500;

    res.status(statusCode).json({
        status:'fail',
        message: error.message,
        error:error.error,
    })
}

module.exports = handleError;
