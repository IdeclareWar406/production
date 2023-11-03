const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const path = require('path')

const app = express()
app.use(morgan('dev'))

app.use(express.json())

mongoose.connect(process.env.dbAuth, {useNewUrlParser: true}, console.log('connected to db'))

app.use('/api/auth' ,expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use('/api/profile' , require('./routes/authRouter.js'))
app.use('/api/newclient', require('./routes/clientRouter.js'))
app.use('/api/auth/clients', require('./routes/clientEditRouter.js'))
app.use('/api/auth/editOfficer', require('./routes/loanOfficerEdit.js'))
app.use('/api/officers', require('./routes/loanOfficerGet.js'))
app.use(express.static(path.join(__dirname, "client", "dist")))


app.use('/', (err, req, res, next)=>{
    res.send({errMsg: err.message})
})

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

app.listen(8173,()=>{
    console.log('server is running')
})