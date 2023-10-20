const express = require('express')

const State = require("../models/states.js")

const stateRouter = express.Router()

stateRouter.post('/', async(req,res)=>{
    try {
        const newState = new State(req.body)
        newState.save()
        res.status(200).send(newState)
    } catch (err) {
        res.status(500)
        res.json({message: 'failed to post'})
    }
})

stateRouter.put("/:stateId", async(req,res)=>{
    try {
        const updatedState = await State.findOneAndUpdate({_id: req.params.stateId}, req.body, {new:true})
        res.status(200).send(updatedState)
    } catch (err) {
        res.status(500)
        res.json({message: "issue in update"})
    }
})


stateRouter.delete('/:stateId', async(req,res)=>{
    try {
        await State.findOneAndDelete({_id: req.params.stateId})
        res.status(200).send('Entry Removed')
    } catch (err) {
        res.status(404)
        res.json({message: "issue in delete route"})
    }
})






module.exports = stateRouter