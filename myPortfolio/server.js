const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const {expressjwt} = require('express-jwt')
require('dotenv').config()
const app = express()
const path = require('path')

app.use(morgan('dev'))

app.use(express.json())

mongoose.connect(process.env.dbAuth, {useNewUrlParser: true} , console.log('connected to db'))
app.use("/api/auth", expressjwt({secret: process.env.SECRET, algorithms: ['HS256']}))

app.use('/api/profiles', require('./routes/authRouter'))
app.use('/api/auth/users', require('./routes/users.js'))
app.use('/api/auth/edituser', require('./routes/userEdit.js'))
app.use('/api/announcements', require('./routes/announcements.js'))
app.use('/api/announce', require('./routes/announcements.js'))
app.use('/api/auth/announceEdit', require('./routes/announceEdit.js'))
app.use('/api/auth/project', require('./routes/clientProject.js'))
app.use(`/api/email`, require('./routes/emailer.js'))
app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use('/' , (err,req,res,next)=>{
    res.send({errMsg: err.message})
})


app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(8173,()=>{
    console.log('server is active')
})


