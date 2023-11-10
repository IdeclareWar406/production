const express = require('express')

const Weapons = require('../models/weapons.js')

const weaponRouter = express.Router()

let hotData;

let isUpdated = false

weaponRouter.get('/', async(req,res)=>{
    try {
        if(!isUpdated){
            const foundWeapons = await Weapons.find({})
            hotData = foundWeapons
            isUpdated = true
            res.status(200).send(foundWeapons)
        }

        else if(isUpdated){
            res.status(200).send(hotData)
        }
        
    } catch (err) {
        res.status(500)
        res.json({message: "issue with get route"})
    }
})

weaponRouter.post('/auth/newWeapon', async(req,res)=>{
    try {
        const newWeapon = new Weapons(req.body)
        isUpdated = false
        newWeapon.save()
        res.status(200).send(newWeapon)
    } catch (err) {
        res.status(500)
        res.json({message: err})
    }
})

weaponRouter.delete("/auth/removeWeapon/:weaponId", async(req,res)=>{
    try {
        await Weapons.findOneAndDelete({_id: req.params.weaponId})
        isUpdated = false
        res.status(200).send("Entry removed")
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

weaponRouter.put("/auth/updateWeapon/:weaponId", async(req,res)=>{
    try {
        const updatedWeapon = await Weapons.findOneAndUpdate({_id: req.params.weaponId}, req.body, {new:true})
        isUpdated = false
        res.status(200).send(updatedWeapon)
    } catch (err) {
        res.status(404)
        res.json({message: err})
    }
})

module.exports = weaponRouter