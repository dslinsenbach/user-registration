const logger = require('./logging');

exports.sendError = (res, e, status) => {
  if (e.sqlMessage) {
    logger.error({
      type: 'database',
      state: e.sqlState,
      message: e.sqlMessage,
      statement: e.sqlStatement,
      params: e.sqlParams,
    });
  } else {
    logger.error({
      type: 'runtime',
      message: e.message,
    });
  }

  const response = {
    success: false,
    message: e.sqlMessage || e.message || e,
    data: null,
  };

  if (process.env.SHOW_DEBUG) {
    logger.info(status, e);
  }

  res.status(status || 500).json(response);
};

exports.sendSuccess = (res, data) => {
  const response = {
    success: true,
    message: null,
    data,
  };

  res.status(200).json(response);
};
