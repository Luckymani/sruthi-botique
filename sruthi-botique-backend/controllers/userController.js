const Temp__data = require('../models/tempdata')

module.exports.createAccount = function(req,res){
    const {username,email,password} = req.body

    Temp__data.findOne()

    Temp__data.findOne({email:email},(err,user)=>{
        if(err){
            return console.log(err)
        }
        else if(!user){
            Temp__data.create(
                {
                    username:username,
                    email:email,
                    password:password,
                    googleAuth:false,
                    OTP: Math.floor(100000 + Math.random() * 900000)

                }
            )
        }
        else{
            if(user.googleAuth){
                //send to create password
            }
            else{
                return res.redirect('/')
            }
        }
    })
}


