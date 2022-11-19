const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://toto:toto1234@atlascluster.aqa1gfb.mongodb.net/mern-pizza';

mongoose.connect(mongoURL, {useUnifiedTopology : true, useNewUrlParser : true})

var db  = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB  Connection Sucessfull')
})
db.on('error', ()=>{
    console.log('Mongo db Connection Failed ')
})
module.exports = mongoose