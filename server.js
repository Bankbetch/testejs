const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/project02', {
  useNewUrlParser: true,
})

mongoose.connection.on('connected',function(){
    console.log('Mongoose defualt connect open')
})

mongoose.connection.on('error',function(err){
    console.log('Mongoose defualt connection error: ' + err)
})

mongoose.connection.on('disconnected',function(){
    console.log('Mongoose defualt connect disconnected')
})

mongoose.pluralize(null) //ใส่เพื่อให้ไม่เติม s จะเข้า collection
