const express = require('express')
const Portuser = require('../models/user.js')
const jwt = require('jsonwebtoken')
const authRouter = express.Router()

authRouter.post('/signup', async(req,res)=>{
    try{
    const foundOne = await Portuser.findOne({username: req.body.username})

        if(foundOne){
            throw foundOne
        }
        else if(!foundOne){
            const newUser = await new Portuser(req.body)
           await newUser.save()

           const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
           res.status(200).send({token, user:newUser.withoutPassword()})
        }
}
catch{
    res.status(500)
    res.json({message: 'username already exists'})
}

})


authRouter.post('/login', async(req,res)=>{
    try{
        
        const foundUser = await Portuser.findOne({username: req.body.username})
        if(foundUser){
            foundUser.checkPassword(req.body.password, (err, isMatch)=>{
                if(err){
                    console.log('error has occured')
                    res.status(403)
                    res.json({message: 'username or password does not exist'})
                }
                if(!isMatch){
                    console.log('does not match')
                    res.status(403)
                    res.json({message: 'access denied'})
                }
                if(isMatch){
                const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
                res.status(200).send({token, user: foundUser.withoutPassword()})}
            })
        }
        if(!foundUser){
            console.log('did not find')
           throw foundUser
        }
    }
    catch{
        res.status(403)
        res.json({message: 'username or password does not exist'})
    }
})



module.exports= authRouter