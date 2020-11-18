var mongoose = require('mongoose');

module.exports = function(){
    mongoose.set('debug', true);
    var db=mongoose.connect('mongodb://192.168.2.29/modbus');
    require('../app/models/modbus.model');
    return db;
}