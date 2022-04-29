import Logger from "./Logger";

/**
 * @name ServerResponse
 * @param {Object} req express request object
 * @param {Object} res express response object
 * @param {Number} code status code to return
 * @param {Object} data object with response details
 * @returns {JSON} JSON response with status and response information
 */

export const SuccessResponse = (req, res, code, data, message = null) => {
    Logger.info(` ${req.originalUrl} - ${req.method} - ${req.ip}- ${code} -
        ${JSON.stringify(data)}`);
    console.log(` ${req.originalUrl} - ${req.method} - ${req.ip}- ${code} - 
        ${JSON.stringify(data)}`);

    res.status(code).json({
        message: message ? message : undefined,
        metaData: data,
    });
};

export const FailureResponse = async (req, res, error, transaction = null) => {
    if (transaction) await transaction.rollback();

    let statusCode = error.statusCode || 500;

    Logger.info(`${req.originalUrl} - ${req.method} - ${req.ip} - ${error}`);
    console.log(`${req.originalUrl} - ${req.method} - ${req.ip} - ${error}`);

    res.status(statusCode).json({
        message: error.message,
        metaData: error.metaData,
    });
}