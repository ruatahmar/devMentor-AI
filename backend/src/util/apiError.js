class apiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong "
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        
    }
}

export {apiError}