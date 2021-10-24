exports.success = (res, statusCode, message, data) => {
  res.status(statusCode || 200).send({
    code: statusCode || 200,
    message: message,
    data: data || {},
  });
};

exports.error = (res, statusCode, message) => {
  res.status(statusCode || 400).send({
    code: statusCode || 400,
    errorMessage: message,
  });
};
