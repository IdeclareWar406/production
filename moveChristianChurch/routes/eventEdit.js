const express = require('express')
const Event = require('../modules/events.js')
const eventEditRouter = express.Router()



eventEditRouter.post("/", async(req,res)=>{
    try {
        req.body.authUser = req.auth._id
        const newEvent = await new Event(req.body)
        newEvent.save()
        res.status(200).send(newEvent)
    } catch (error) {
        res.status(500)
        res.json({message: "check the post method on event"})
    }
})

eventEditRouter.delete("/:eventId", async(req,res)=>{
    try {
      await  Event.findOneAndDelete({_id: req.params.eventId})
        res.status(200).send('Entry removed')
    } catch (error) {
        res.status(404)
        res.json({message: "could not find id"})
    }
})

eventEditRouter.put("/:eventId", async(req,res)=>{
    try {
        const updatedObejct = await Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new:true})
        res.status(200).send(updatedObejct)
    } catch (error) {
        res.status(404)
        res.json({message: "could not find an id"})
    }
})


module.exports = eventEditRouter