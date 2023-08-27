const express = require('express')
const Serving = require('../modules/serving.js')
const Missions = require('../modules/missions.js')
const servingEdit = express.Router()


servingEdit.post('/serving', async(req,res)=>{
    try {
        req.body.authUser = req.auth._id
        const newRole = await new Serving(req.body)
        newRole.save()
        res.status(200).send(newRole)
    } catch (err) {
        res.status(500)
        res.json({message: 'check post route'})
    }
})

servingEdit.delete("/serving/:servingId", async(req,res)=>{
    try {
       await Serving.findOneAndDelete({_id: req.params.servingId})
        res.status(200).send('Entry was removed')
    } catch (err) {
        res.status(404)
        res.json({message: 'check the delete route'})
    }
})

servingEdit.put("/serving/:servingId", async(req,res)=>{
    try {
        const updatedObject = await Serving.findOneAndUpdate({_id: req.params.servingId}, req.body, {new:true})
        res.status(200).send(updatedObject)
    } catch (err) {
        res.status(404)
        res.json({message: 'check update route'})
    }
})


servingEdit.post('/mission', async(req,res)=>{
    try {
        req.body.authUser = req.auth._id
        const newMission = await new Missions(req.body)
        newMission.save()
        res.status(200).send(newMission)
    } catch (err) {
        res.status(500)
        res.json({message: 'could not create, check new mission route'})
    }
})

servingEdit.delete('/mission/:missionId', async(req,res)=>{
    try {
        await Missions.findOneAndDelete({_id: req.params.missionId})
        res.status(200).send('Entry removed')
    } catch (err) {
        res.status(404)
        res.json({message: 'check id or check delete route'})
    }
})

servingEdit.put('/mission/:missionId',async(req,res)=>{
    try {
        const missionUpdate = await Missions.findOneAndUpdate({_id: req.params.missionId}, req.body, {new:true})
        res.status(200).send(missionUpdate)
    } catch (error) {
        res.status(404)
        res.json({message:'did not find id check update'})
    }
})


module.exports = servingEdit