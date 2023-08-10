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

eventsRouter.post("/", async(req,res)=>{
    try{
        const newEvent = await new Event(req.body)
        newEvent.save()
        res.status(200)
        res.send(newEvent)
    }
    catch{
        res.status(500)
        res.json({message:"Unable to create, check post method"})
    }
})


eventsRouter.delete("/:eventId", async(req,res)=>{
    try{
      await  Event.findOneAndDelete({_id:req.params.eventId})
        res.status(200)
        res.send("Event Removed")
    }
    catch{
        res.status(404)
        res.json({message:"id was not found"})
    }
})

eventsRouter.put("/:eventId",async(req,res)=>{
    try{
        const updatedObject = await Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new:true})
        res.status(200)
        res.send(updatedObject)
    }
    catch{
        res.status(404)
        res.json({message:"check the id or put command"})
    }
})





module.exports= eventsRouter