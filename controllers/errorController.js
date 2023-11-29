const AppError = require("../utils/appError");

const handleJsonWebError = () =>
  new AppError("Invalid token. Please log in again", 401);

const handleTokenExpiredError = () =>
  new AppError("Your token has expired! Please log in again", 401);

const handleValidationError = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: sending message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });

    //Programming or other unknown error: don't leak error details
  } else {
    // 1) Log Error
    console.error("Error", err);

    // 2) send generic message
    res
      .status(500)
      .json({ status: "error", message: "Something went very wrong!" });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = Object.create(err);
    // if (error.name === 'CastError') error = handleCastErrorDB(error);
    // if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") error = handleValidationError(error);
    if (error.name === "JsonWebTokenError") error = handleJsonWebError();
    if (error.name === "TokenExpiredError") error = handleTokenExpiredError();
    sendErrorProd(error, res);
  }
};
