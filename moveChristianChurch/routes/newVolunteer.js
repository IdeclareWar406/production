const express = require('express')

const volunteerRouter = express.Router()

const Serving = require('../modules/serving.js')

const Volunteer = require('../modules/volunteers.js')

volunteerRouter.post('/:positionId', async(req,res)=>{
    try{
        req.body.position = req.params.positionId
        const newVol = await new Volunteer(req.body)
        newVol.save()
        
        const foundPosition = await Serving.find({_id:req.params.positionId})
        const foundVols = await Volunteer.find({position: req.params.positionId})
        
        
        //troubleshoot problem with pushing volunteers into the vol array
        foundPosition.volunteers.push(foundVols)
        foundPosition.save()
        res.status(200).send('successfully added')
    }
    catch{
        res.status(500)
        res.json({message: 'problem with post'})
    }
})





module.exports = volunteerRouter