/*
https://github.com/winstonjs/winston

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
*/

const path = require('path');
const winston = require('winston');
const {combine, timestamp, label, printf, prettyPrint} = winston.format;
require('winston-daily-rotate-file');

const projectDir = path.join(__dirname, '..', '..');
const logDir = path.join(projectDir, 'runtime', 'logs');

var dailyRotateTransport = new winston.transports.DailyRotateFile({
  filename: path.join(logDir, 'application-%DATE%.log'),
  auditFile: path.join(logDir, 'application.audit.json'),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '500m',
  maxFiles: '14d',
});

dailyRotateTransport.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), winston.format.json()),
  transports: [
    dailyRotateTransport,
    new winston.transports.File({
      level: 'error',
      filename: path.join(logDir, 'error.log'),
    }),
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log'),
    }),
    new winston.transports.Console({
      format: combine(
        timestamp(),
        printf(({level, message, timestamp}) => {
          return `[${level}] ${timestamp}: ${message}`;
        }),
      ),
    }),
  ],
});

//logger.info('info Hello World!');
//logger.warn('warn Hello World!');
//logger.error('error Hello World!');

module.exports = logger;
