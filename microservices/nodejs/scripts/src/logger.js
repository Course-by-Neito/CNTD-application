var log4js = require("log4js"),
    log4js_extend = require("log4js-extend");
require("dotenv").config();

exports.configLogger = function (loglevel, category) {
    log4js.configure({
        appenders: {
            out: {
                type: "console"
            },
            app: {
                type: 'file',
                filename: 'app.log'
            }
        },
        categories: {
            default: { appenders: ["out"], level: loglevel }
            // default: { appenders: ["out", "app"], level: loglevel }
        }
    });
    log4js_extend(log4js, {
        path: __dirname,
        format: "at @name (@file:@line:@column)"
    });

    return log4js.getLogger(category);
};