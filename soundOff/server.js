const express =require('express')
const {expressjwt} = require('express-jwt')
const morgan = require('morgan')
const mongoose  = require('mongoose')
require('dotenv').config()
const path = require('path')

const app = express()

app.use(express.json())

app.use(morgan('dev'))
mongoose.connect(process.env.dbAuth, {useNewUrlParser: true},
    console.log('connected to db')
)

app.use('/api/auth', expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))

app.use('/api/profile', require('./routes/authRouter.js'))


app.use('/api', require('./routes/electedOfficial.js'))
app.use('/api', require('./routes/presidential.js'))
app.use('/api', require("./routes/updateRequest.js"))
app.use("/", (err,req,res,next)=>{
    res.send({errMsg: err.message})
})



app.listen(8173, ()=>{
    console.log('server is running')
})