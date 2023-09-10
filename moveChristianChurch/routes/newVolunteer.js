const express = require('express')

const volunteerRouter = express.Router()

const Serving = require('../modules/serving.js')

const Volunteer = require('../modules/volunteers.js')

volunteerRouter.post('/:positionId', async(req,res)=>{
    try{
        req.body.position = req.params.positionId
        const newVol = await new Volunteer(req.body)
        newVol.save()
        
      
        res.status(200).send('Thank you for volunteering')
    }
    catch{
        res.status(500)
        res.json({message: 'problem with post'})
    }
})





module.exports = volunteerRouter