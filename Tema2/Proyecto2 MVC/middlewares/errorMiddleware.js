const errorMiddleware = (err, req, res, next) => {

  const isJsonParseError = err && err.type === 'entity.parse.failed';
  const statusCode = err && (err.statusCode || err.status) ? (err.statusCode || err.status) : 500;

  console.error("ERROR:", err);

  return res.status(isJsonParseError ? 400 : statusCode).json({
    error: isJsonParseError
      ? "Invalid JSON payload"
      : (process.env.NODE_ENV === 'development' ? err.message : "Internal server error")
  });

};

module.exports = errorMiddleware;