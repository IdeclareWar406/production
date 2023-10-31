const express= require('express')
const Elder = require('../modules/elders')
const elderRouter = express.Router()

let hotData

let isUpdated = false



elderRouter.get('/elders', async(req,res)=>{
    try {
        if(!isUpdated){
        const foundAll = await Elder.find({})
        hotData = foundAll
        isUpdated = true
        res.status(200).send(foundAll)}
        else res.status(200).send(hotData)


    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})

elderRouter.post('/auth/elderedit/', async(req,res)=>{
    try {
        const newElder = new Elder(req.body)
        newElder.save()
        isUpdated = false
        res.status(200).send(newElder)
    } catch (err) {
        res.status(500)
        res.json({message: 'failed to create elder'})
    }
})


elderRouter.put('/auth/elderedit/:elderId',async (req,res)=>{
    try {
       
        const updatedElder = await Elder.findOneAndUpdate({_id: req.params.elderId}, req.body, {new:true})
       isUpdated = false
        res.status(200).send(updatedElder)
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

elderRouter.delete("/auth/elderedit/:elderId", async(req,res)=>{
    try {
       await Elder.findOneAndDelete({_id: req.params.elderId})
       isUpdated = false
        res.status(200).send('Entry removed')
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})




module.exports = elderRouter