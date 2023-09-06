const express = require('express')

const volunteerRouter = express.Router()

const Volunteer = require('../modules/volunteers.js')

volunteerRouter.post('/:positionId', async(req,res)=>{
    try{
        req.body.postion = req.params.positionId
        const newVol = await new Volunteer(req.body)
        newVol.save()
        res.status(200).send('successfully added')
    }
    catch{
        res.status(500)
        res.json({message: 'problem with post'})
    }
})





module.exports = volunteerRouter