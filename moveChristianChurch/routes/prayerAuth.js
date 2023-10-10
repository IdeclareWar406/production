const express = require('express')

const Prayer = require('../modules/prayer.js')

const prayerRouter = express.Router()

prayerRouter.delete('/:prayerId',async(req,res)=>{
try {
    await Prayer.findOneAndDelete({_id: req.params.prayerId})
    res.status(200).send('Entry removed')
    
} catch (err) {
    res.status(404)
    res.json({message: 'Id incorrect or delete route issue'})
}
})

prayerRouter.put('/:prayerId',async(req,res)=>{
    try {
        const updatedPrayer = await Prayer.findOneAndUpdate({_id: req.params.prayerId}, req.body, {new:true})
        
        console.log(updatedPrayer)
        res.status(200).send(updatedPrayer)
    } catch (err) {
        
    }
})

module.exports = prayerRouter