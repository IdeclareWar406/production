const express = require('express')
const Portuser = require('../models/user.js')
const Project = require('../models/clientProject.js')

const projectRouter = express.Router()

projectRouter.get('/', async(req,res)=>{
    try{
        const userId = req.auth._id
        const foundUser = await Portuser.findOne({_id: userId})
        if(!foundUser.isAdmin){
            const foundProject = await Project.find({clientId: foundUser._id})
            res.status(200).send(foundProject)
        }
        else if(foundUser.isAdmin){
            const foundProjects = await Project.find({})
            res.status(200).send(foundProjects)
        }
    }

    catch{
        res.status(500)
        res.json({message: "check get route"})
    }
})

projectRouter.post('/', async(req,res)=>{
    try{
        req.body.clientId = req.auth._id
        const newProject = await new Project(req.body)
        newProject.save()
        res.status(200).send(newProject)
    }

    catch{
        res.status(500)
        res.json({message: 'check post route'})
    }
})


projectRouter.put("/:projectId", async(req,res)=>{
    try{
        const updatedObject = await Project.findOneAndUpdate({_id: req.params.projectId}, req.body, {new:true})
        res.status(200).send(updatedObject)
    }
    catch{
        res.status(404)
        res.json({message: 'check put route'})
    }
})

projectRouter.delete("/:projectId", async(req,res)=>{
    try{

        const foundUser = await Portuser.findOne({_id: req.auth._id})
        if(foundUser.isAdmin){
            await Project.findOneAndDelete({_id: req.params.projectId})
            res.status(200).send('Project Removed')
        }
        else if(!foundUser.isAdmin){
            res.status(403)
            res.json({message:'Contact Developer to delete'})
        }
    }
    catch{
        res.status(404)
        res.json({message: "could not find id"})
    }
})



module.exports= projectRouter