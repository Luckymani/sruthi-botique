const mongoose = require('mongoose')

const userDataSchema  = new mongoose.Schema({
   username:String,
   email:String,
   password:String,
   OTP:Number,
   googleAuth:Boolean,
   PhoneNo:Number
},
{
    timestamps:true
}
)

const UserData = mongoose.model('userdata',userDataSchema)

module.exports = UserData;