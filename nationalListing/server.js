const express = require('express')
const jwt = require('jsonwebtoken')
const {expressjwt} = require('express-jwt')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()

app.use(morgan('dev'))

app.use(express.json())

mongoose.connect(process.env.dbAuth ,{useNewUrlParser: true}, console.log('connected to db'))

app.use('/api/auth', expressjwt({secret:process.env.SECRET , algorithms:['HS256']}))




app.use('/', (err,res,req,next)=>{
    res.send({errMsg: err.message})
})

app.listen(8173,()=>{
    console.log('Server is alive')
})