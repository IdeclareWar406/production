const express =require('express')
const Elder = require('../modules/elders.js')

const elderRouter = express.Router()

elderRouter.post('/auth/elderedit/', async(req,res)=>{
    try {
        const newElder = new Elder(req.body)
        newElder.save()
        res.status(200).send(newElder)
    } catch (err) {
        res.status(500)
        res.json({message: 'failed to create elder'})
    }
})


elderRouter.put('/auth/elderedit/:elderId',async (req,res)=>{
    try {
        console.log(req.params.elderId)
        const updatedElder = await Elder.findOneAndUpdate({_id: req.params.elderId}, req.body, {new:true})
       
        res.status(200).send(updatedElder)
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

elderRouter.delete("/auth/elderedit/:elderId", async(req,res)=>{
    try {
       await Elder.findOneAndDelete({_id: req.params.elderId})
        res.status(200).send('Entry removed')
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})



module.exports = elderRouter