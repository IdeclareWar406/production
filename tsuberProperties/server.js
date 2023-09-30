const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {expressjwt} = require('express-jwt')


const app = express()
app.use(morgan('dev'))

app.use(express.json())

mongoose.connect(process.env.dbAuth, {useNewUrlParser: true}, console.log('connected to db'))
app.use('/auth' ,expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use('/api/profile' , require('./routes/authRouter.js'))


app.use('/', (err, req, res, next)=>{
    res.send({errMsg: err.message})
})

app.listen(8173,()=>{
    console.log('server is running')
})