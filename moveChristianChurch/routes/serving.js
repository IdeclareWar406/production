const express = require('express')
const Mission = require('../modules/missions.js')
const Serving = require('../modules/serving.js')
const serving = require('../modules/serving.js')


const servingRouter = express.Router()

servingRouter.get("/volunteer", async(req,res)=>{
    try {
        const foundVolunteer = await Serving.find({})
        res.status(200).send(foundVolunteer)
        

    } catch (error) {
        res.status(500)
        res.json({message: "check volunteer get route"})
    }
})

servingRouter.get("/missions", async(req,res)=>{
    try {
        const foundMission = await Mission.find({})
        res.status(200).send(foundMission)
    } catch (error) {
        
    }
})


module.exports= servingRouter