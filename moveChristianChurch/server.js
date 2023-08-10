const express = require('express')
const morgan = require('morgan')
const mongoose= require('mongoose')
const app = express()
 app.use(morgan("dev"))

app.use( express.json())

 mongoose.connect(`mongodb://localhost:27017/moveChristianChurch`, console.log('connected to db'))

app.use("/api/users", require("./routes/users.js"))

app.use("/api/events", require("./routes/events.js"))

app.use("/api/prayer", require("./routes/prayer.js"))

app.use("/", (err,req,res,next)=>{
    res.send({errMsg: err.message})
})

app.listen(9000, ()=>{
    console.log("server is running")
})