const express = require('express')

const Announcements = require('../models/announcements.js')

const announceRouter = express.Router()

announceRouter.post('/', async(req,res)=>{
    try{
        req.body.postedBy = req.auth._id
       
        const newPost = await new Announcements(req.body)
        
        newPost.save()
       console.log('error is here')
       res.status(200).send(newPost)
    }

    catch{
        res.status(500)
        res.json({message: 'check post route'})
    }
})


announceRouter.put('/:postId', async(req,res)=>{
    try{
        const updatedObject = await Announcements.findOneAndUpdate({_id: req.params.postId}, req.body, {new:true})
        res.status(200).send(updatedObject)
    }

    catch{
        res.status(404)
        res.json({message: 'could not find or does not exist'})
    }
})


announceRouter.delete('/:postId', async(req,res)=>{
    try{
        await Announcements.findOneAndDelete({_id: req.params.postId})
        res.status(200).send('Entry Removed')
    }

    catch{
        res.status(404)
        res.json({message: 'could not find or does not exist'})
    }
})



module.exports = announceRouter