const express = require('express')

const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const userRouter = express.Router()

userRouter.post('/signup', async (req,res)=>{
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(!foundUser){
           
            const newUser = new User(req.body)
           
           await newUser.save()
           console.log('this works')
            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({token , user:newUser.withoutPassword()})
        }
        else if(foundUser){
            
            const err = 'User already exists'
            throw err
        }

    } 
    catch (err) {
     
         res.status(500) 
        res.json({message: err? err : 'server error'})
    }
})

userRouter.post('/login', async(req,res)=>{
    try {
        const foundUser = await User.findOne({username: req.body.username})
        if(foundUser){
            foundUser.checkPassword(req.body.password, (err, isMatch)=>{
                if(err){
                    console.log(err)
                    res.status(403)
                    res.json({message:"error in the login route"})
                }
                if(!isMatch){
                    console.log('no match')
                    res.status(403)
                    res.json({message: "username or password does not match"})
                }
                else if(isMatch){
                    const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
                    res.status(200).send({token , user:foundUser.withoutPassword()})
                }
            })
        }
    } catch (err) {
        res.status(403)
        res.json({message: err? err : "server error"})
    }
})



module.exports = userRouter