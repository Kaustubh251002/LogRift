const winston = require("winston");
const ecsFormat = require("@elastic/ecs-winston-format");

const Logger = winston.createLogger({
    level: "debug",
    format: ecsFormat({ convertReqRes: true }),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            //path to log file
            filename: "logs/log.json",
            level: "debug",
        }),
    ],
});

const loggerMiddleware = (req, res, next) => {
    logger.info(`Incoming request ${req} `);
    next();
};

module.exports = { loggerMiddleware, Logger };