const express= require('express')
const Elder = require('../modules/elders')
const elderRouter = express.Router()

elderRouter.get('/', async(req,res)=>{
    try {
        const foundAll = await Elder.find({})
        res.status(200).send(foundAll)
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})






module.exports = elderRouter