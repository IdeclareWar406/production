const express = require('express')
const morgan = require('morgan')
const mongoose= require('mongoose')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const path = require('path')
const app = express()
 app.use(morgan("dev"))

app.use( express.json())




mongoose.connect(process.env.dbAuth, {useNewUrlParser:true}, console.log('connected to db'))

app.use("/api/auth", expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use("/api/serving", require('./routes/serving.js'))
app.use("/api/accounts", require('./routes/authRouter.js'))
app.use('/api/auth/eventUpdate', require('./routes/eventEdit.js'))
app.use('/api/auth/service', require('./routes/servingEdit.js'))
app.use('/api/auth/prayer', require('./routes/prayerAuth.js'))
app.use("/api/users", require("./routes/users.js"))
app.use('/api/service', require('./routes/serving.js'))
app.use("/api/events", require("./routes/events.js"))
app.use("/api/prayer", require("./routes/prayer.js"))
app.use("/api/auth/volunteers", require('./routes/volManage.js'))
app.use('/api/newvol' , require("./routes/newVolunteer.js"))
app.use("/api/auth/useredit", require('./routes/userEdit.js'))
app.use(express.static(path.join(__dirname, "client", "build")))



app.use("/", (err,req,res,next)=>{
    res.send({errMsg: err.message})
})

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "client", "moveChristianChurch", "index.html"))
});

app.listen(9000, ()=>{
    console.log("server is running")
})