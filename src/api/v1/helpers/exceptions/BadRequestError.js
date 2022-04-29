import CustomError from "./CustomError";

class BadRequestError extends CustomError {
    constructor(message = "Bad Request", metaData = {}) {
        super(400, message, metaData);
    }
}

export default BadRequestError;