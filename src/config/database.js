const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise

module.exports = Mongoose.connect('mongodb://localhost/mymoney')