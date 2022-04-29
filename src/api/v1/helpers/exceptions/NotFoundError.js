import CustomError from "./CustomError";

class NotFoundError extends CustomError {
    constructor(message = "Not Found") {
        super(404, message);
    }
}

export default NotFoundError;