const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const {expressjwt} = require('express-jwt')
require('dotenv').config()
const app = express()

app.use(morgan('dev'))

app.use(express.json())

mongoose.connect(process.env.dbAuth, {useNewUrlParser: true} , console.log('connected to db'))
app.use("/api/auth", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/profiles', require('./routes/authRouter'))
app.use('/api/users', require('./routes/users.js'))
app.use('/api/auth/edituser', require('./routes/userEdit.js'))
app.use('/' , (err,req,res,next)=>{
    res.send({errMsg: err.message})
})

app.listen(8173,()=>{
    console.log('server is active')
})


