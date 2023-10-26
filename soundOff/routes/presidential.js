const express = require('express')
const President = require('../models/presidential.js')
const presidentialRouter = express.Router()

let hotData

let isUpdated = false


presidentialRouter.get('/candidates', async(req,res)=>{
    try {
        if(!isUpdated){
        const found = await President.find({})
        hotData = found
        isUpdated = true
        res.status(200).send(found)}
        else if(isUpdated){
            res.status(200).send(hotData)
        }
    } catch (err) {
        res.status(500)
        res.json({message: "check get route"})
    }
})

presidentialRouter.post("/auth/newcandidate", async(req,res)=>{
    try {
        const newCandidate = new President(req.body)
        isUpdated = false
        newCandidate.save()
        res.status(200).send(newCandidate)
    } catch (err) {
        res.status(500)
        res.json({message: "check post route or data"})
    }
})

presidentialRouter.put('/auth/candidate/:candidateId', async(req,res)=>{
    try {
        const updatedObject = await President.findOneAndUpdate({_id:req.params.candidateId}, req.body, {new:true})
        isUpdated = false
        res.status(200).send(updatedObject)
    } catch (err) {
        res.status(404)
        res.json({message: "could not find"})
    }
})

presidentialRouter.delete("/auth/candidate/:candidateId", async(req,res)=>{
    try {
        await President.findOneAndDelete({_id: req.params.candidateId})
        isUpdated = false
        res.status(200).send("Entry removed")
    } catch (err) {
        res.status(404)
        res.json({message: "could not find id"})
    }
})

module.exports = presidentialRouter