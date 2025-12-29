class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  // default values
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  // Mongo duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // JWT invalid token
  if (err.name === "JsonWebTokenError") {
    err = new ErrorHandler("Json Web Token is invalid, Try again!", 400);
  }

  // JWT expired token
  if (err.name === "TokenExpiredError") {
    err = new ErrorHandler("Json Web Token is expired, Try again!", 400);
  }

  // Mongoose cast error
  if (err.name === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose validation errors
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(" ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
