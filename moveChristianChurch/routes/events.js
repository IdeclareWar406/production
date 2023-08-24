const express = require('express')
const Event = require("../modules/events.js")
const eventsRouter = express.Router()


eventsRouter.get("/", async(req,res)=>{
    try{
        const foundAll = await Event.find({})
         res.status(200)
        res.send(foundAll)
    }

    catch{
        res.status(500)
        res.json({message: "Check the get request"})
    }
})







module.exports= eventsRouter