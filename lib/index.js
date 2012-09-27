// Copyright 2012 Pedro P. Candel <kusorbox@gmail.com>. All rights reserved.
var Logger = require('bunyan');

var levels = [Logger.TRACE, Logger.DEBUG, Logger.INFO,
              Logger.WARN, Logger.ERROR, Logger.FATAL];


function decreaseLevel(logger) {
    if (!logger._level || !logger.level()) {
        console.log('Unkwnown logger object, skipping.');
    }

    var pos = levels.indexOf(logger._level);

    console.log('Got SIGUSR1. Attempting to decrease log level');

    if (pos === (levels.length - 1)) {
        console.log('Log level already set to the minimun. ' +
          'Doing nothing.');
    } else {
        logger.level(levels[pos + 1]);
        console.log('Log level set to ' + levels[pos + 1]);
    }
}

function increaseLevel(logger) {
    if (!logger._level || !logger.level()) {
        console.log('Unkwnown logger object, skipping.');
    }

    var pos = levels.indexOf(logger._level);

    console.log('Got SIGUSR2. Attempting to increase log level');

    if (pos === 0) {
        console.log('Log level already set to the maximun. ' +
          'Doing nothing.');
    } else {
        logger.level(levels[pos - 1]);
        console.log('Log level set to ' + levels[pos - 1]);
    }
}


module.exports = {
    signal: function (loggers) {
        if (!Array.isArray(loggers)) {
            loggers = [loggers];
        }

        process.on('SIGUSR1', function () {
            loggers.forEach(decreaseLevel);
        });

        process.on('SIGUSR2', function () {
            loggers.forEach(increaseLevel);
        });

        return (true);
    }
};
