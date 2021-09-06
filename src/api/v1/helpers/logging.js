const winston = require('winston');

// Initialize logging and add file transports
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format:
            winston.format.combine(
              winston.format.timestamp({
                format: 'YYYY-MM-DD hh:mm:ss A ZZ',
              }),
              winston.format.json(),
            ),
      handleExceptions: true,
    }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  // Add logging transport for local environment console
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
