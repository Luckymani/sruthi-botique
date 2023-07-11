const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT
const bodyParser = require('body-parser')
const db = require('./configurations/mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.post('/user/registration',(req,res)=>{
    console.log(req.body)
}
)

app.post('/user/login',(req,res)=>{
    console.log(req.body)
}
)

app.listen(port,(err)=>{
    console.log("succesfully running on port:",port)
})
