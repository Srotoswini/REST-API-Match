const express = require('express');
const router = express.Router();
const Match = require('../model/matchmodel')


const app = express()

//getting all users

router.get('/', async (req , res) => {
    try{
        const matches = await Match.find()
        res.status(500).json({matches: err.message})
    }
    
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//getting one user

router.get('/:id', async (req , res) => {
    try{
        const match = await Match.findById(req.params.id)
        res.status(200).json(match)
    }
    
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//creating one user

router.post('/',async (req , res) => {
    
    const newuser = new Match({
        name: req.body.name,
        age : req.body.age,
        zodiac: req.body.zodiac,
        date: req.body.date
    })

    try{
        const done = await newuser.save()
        res.status(201).json(done)

    }
    
    catch(err){
        res.status(400).json({message: err.message})
    }
})

//updating one user

router.patch('/:id', async (req, res) => {
    let upmatch = await Match.findById(req.params.id)
        if (req.body.name != null) {
            upmatch.name = req.body.name
        }

        if (req.body.age != null) {
            upmatch.age = req.body.age
        }

        if (req.body.zodiac != null) {
            upmatch.zodiac = req.body.zodiac
        }
    
    try{
        const updated = await upmatch.save()
        res.json(updated)
        res.status(204).json(done)
    }
    catch(err) {
        res.status(400).json({ message: err.message })
    }
})

//deleting one user

router.delete('/:id', async (req, res) => {
    try{
        const removeuser = await Match.findById(req.params.id)
        const removed = await removebuyer.delete()
        res.json(removed)
        res.status(203).json(done)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router