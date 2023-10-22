const express = require('express')

const Reps = require('../models/electedOfficial.js')

const repRouter = express.Router()

repRouter.get('/reps', async(req,res)=>{
    try {
        const foundAll = await Reps.find({})
        res.status(200).send(foundAll)
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message: "issue in get route"})
    }
})

repRouter.post("/auth/newRep", async(req,res)=>{
    try {
        const newRep = new Reps(req.body)
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
        res.status(200).send('entry removed')
    } catch (err) {
        res.status(404)
        res.json({message: "could not find"})
    }
})
repRouter.put('/auth/reps/:repId',async(req,res)=>{
    try {
        const updatedRep = await Reps.findOneAndUpdate({_id: req.params.repId}, req.body, {new:true})
        res.status(200).send(updatedRep)
    } catch (err) {
        console.log(err)
        res.status(404)
        res.json({message: "could not find id"})
    }
})


module.exports = repRouter