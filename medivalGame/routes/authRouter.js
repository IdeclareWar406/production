const express = require('express')
const jwt = require('jsonwebtoken')
const gameUser = require("..//models/user.js")

const authRouter = express.Router()

let status;

authRouter.post('/signup', async(req,res)=>{
    try {
        const foundUser = await gameUser.findOne({username: req.body.username})
            if(foundUser){
                const err = "User already exists"
                status = 403
                throw err
              
            }
            if(!foundUser){
                const newUser = new gameUser(req.body)
                await newUser.save()

                const token = jwt.sign(newUser.withoutPassword() , process.env.SECRET )

                res.status(200).send({token, user: newUser.withoutPassword()})
            }

    } catch (err) {
        res.status(status || 500)
        res.json({message: err})
    }
})


authRouter.post("/login", async(req,res)=>{
    try {
        const foundUser = await gameUser.findOne({username: req.body.username})
        if(foundUser){
            foundUser.checkPassword(req.body.password, (err, isMatch)=>{
                if(err){
                    console.log("we have an err")
                }
               else if(!isMatch){
                    const err = "username or password is incorrect"
                 
                   res.status(403)
                   res.json({message: err})
                }

                else if(isMatch){
                    const token = jwt.sign(foundUser.withoutPassword(), process.env.SECRET)
                    res.status(200).send({token, user:foundUser.withoutPassword()})
                }

            })
        }
        if(!foundUser){
            status = 403
            const err = "Username or password is incorrect"
            throw err
        }
    } catch (err) {
        
        res.status(status || 500)
        res.json({message: err || "error on login, try again later"})
    }
})

module.exports = authRouter