const express =require('express')
const {expressjwt} = require('express-jwt')
const morgan = require('morgan')
const mongoose  = require('mongoose')
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(morgan('dev'))
mongoose.connect(process.env.dbAuth, {useNewUrlParser: true},
    console.log('connected to db')
)

app.use('/api/auth', expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))








app.listen(8173, ()=>{
    console.log('server is running')
})