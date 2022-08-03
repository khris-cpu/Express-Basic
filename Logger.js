const users = require('./Users');
const moment = require('moment');

const logger = (req,res,next) => {
    console.log(`URL : ${req.protocol}://${req.get('host')}${req.originalUrl}:  ${moment().format()}`);
    console.log(users);
    next();
}

module.exports = logger;