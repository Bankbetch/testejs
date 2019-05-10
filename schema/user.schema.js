const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    employee_id: String,
    name: String,
    surname:String,
    doctype: String,
    user: String,
    password: String,
    salary: Number,
    ot:Number,
    bonus:Number
});



// "employee_id" : "101",
// "name" : "มนัส",
// "surname" : "ทองดี",
// "doctype" : "admin",
// "user" : "admin",
// "password" : "admin01",
// "salary" : 35600,
// "OT" : 5000,
// "Bonus" : 10000

module.exports = mongoose.model('mst_employee', userSchema)