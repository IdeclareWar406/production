const express = require('express')

const volManageRouter = express.Router()

const Volunteer = require('../modules/volunteers.js')


volManageRouter.get("/", async(req,res)=>{
    try{
        const foundVol = await Volunteer.find({})
        res.status(200).send(foundVol)
    }
    catch{
        res.status(500)
        res.json({message: 'check get route'})
    }
})

volManageRouter.put("/:volunteerId", async(req,res)=>{
    try{
        const updatedObject = await Volunteer.findOneAndUpdate({_id: req.params.volunteerId}, req.body, {new:true})
        
        res.status(200).send(updatedObject)
    }

    catch{
        res.status(404)
        res.json({message: 'check update route or bad id'})
    }
})

volManageRouter.delete("/:volunteerId", async(req,res)=>{
    try{
        await Volunteer.findOneAndDelete({_id:req.params.volunteerId})
        res.status(200).send('Entry removed')
    }

    catch{
        res.status(404)
        res.json({message: 'check id or delete route'})
    }
})






module.exports= volManageRouter