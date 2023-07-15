const mongoose = require('mongoose')

const tempDataSchema  = new mongoose.Schema({
   username:String,
   email:String,
   password:String,
   OTP:Number
}
)

const TempData = mongoose.model('tempdata',tempDataSchema)

module.exports = TempData;