const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
require('dotenv').config()
const path = require('path')

const app = express()
app.use(morgan('dev'))

app.use( express.json())

mongoose.connect(process.env.dbAuth , console.log('connected to db'))
app.use('/api/weapons/auth' ,expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use("/api/profile", require("./routes/authRouter.js"))
app.use("/api/weapons" , require('./routes/weapons.js'))


app.use("/", (err,req,res, next)=>{
    res.send({errMsg: err.message})
})

app.listen(8173, ()=>{
    console.log('server is running')
})

