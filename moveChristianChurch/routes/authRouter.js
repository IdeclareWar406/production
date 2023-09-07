const express = require('express')
const User = require('../modules/users.js')
const jwt = require('jsonwebtoken')
const authRouter = express.Router()

authRouter.post('/signUp', async(req,res)=>{
    try {
        
        const findUser = await User.findOne({username: req.body.username})
        if(findUser){
            console.log('already exists')
            throw findUser
        }
       else if(!findUser){
            console.log('new user')
            const newUser = await new User(req.body)
           await newUser.save()
           
            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            
            res.status(200).send({token, user: newUser.withoutPassword()})
        }
    } catch (err) {
        
        res.status(500)
        res.json({message: 'username already exists'})
    }
})

authRouter.post("/login", async(req,res)=>{
    try{
        const foundUser = await User.findOne({username: req.body.username.toLowerCase()})
        if(foundUser){
            foundUser.checkPassword(req.body.password, (err, isMatch)=>{
                if(err){
                    console.log('err')
                    res.status(403)
                    res.json({message: 'username or password does not match'})
                }
                if(!isMatch){
                    console.log('no match')
                    res.status(403)
                    res.json({message: "username or password does not match"})
                    return
                }
                const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
                res.status(200).send({token, user: foundUser.withoutPassword()})
            })
           
        }
        if(!foundUser){
            console.log('did not find user')
            // res.status(403).send("username or password does not match")
            throw foundUser
        }
    }
    catch (err){
        res.status(403)
        res.json({message: "username or password does not match"})
    }
})





module.exports = authRouter