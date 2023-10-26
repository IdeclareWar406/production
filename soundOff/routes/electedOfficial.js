const express = require('express')

const Reps = require('../models/electedOfficial.js')

const repRouter = express.Router()

let hotData

let isUpdated = false

repRouter.get('/reps', async(req,res)=>{
    try {
        if(!isUpdated){
        const foundAll = await Reps.find({})
        hotData = foundAll
        isUpdated = true
        res.status(200).send(foundAll)}
            else if(isUpdated){
                res.status(200).send(hotData)
            }

    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message: "issue in get route"})
    }
})

repRouter.post("/auth/newRep", async(req,res)=>{
    try {
        const newRep = new Reps(req.body)
        isUpdated = false
        newRep.save()
        res.status(200).send(newRep)
    } catch (err) {
        res.status(500)
        res.json({message: 'check post route'})
    }
})

repRouter.delete("/auth/reps/:repId", async(req,res)=>{
    try {
        await Reps.findOneAndDelete({_id:req.params.repId})
        isUpdated = false
        res.status(200).send('entry removed')
    } catch (err) {
        res.status(404)
        res.json({message: "could not find"})
    }
})
repRouter.put('/auth/reps/:repId',async(req,res)=>{
    try {
        const updatedRep = await Reps.findOneAndUpdate({_id: req.params.repId}, req.body, {new:true})
        isUpdated = false
        res.status(200).send(updatedRep)
    } catch (err) {
        console.log(err)
        res.status(404)
        res.json({message: "could not find id"})
    }
})


module.exports = repRouter