const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection

db.on('error',console.error.bind(console,'error connecting to db'))

db.once('open',function(err){
    if(err){return console.log('error connecting to db',err)}
    return console.log("Successfully connected to db")
})


