const mongoose = require('mongoose')

const tempDataSchema  = new mongoose.Schema({
   username:String,
   email:String,
   password:String,
   OTP:Number
}
)

const TempData = mongoose.model('Temp_Data',tempDataSchema)

module.exports = TempData;