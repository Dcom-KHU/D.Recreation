'use strict'

const express = require('express')
const router = express.Router()
const diceroll = require('./diceroll')
const draw = require('./draw')
const scoreboard = require('./scoreboard')
const speedquiz = require('./speedquiz')
const worldcup = require('./worldcup')
const user = require('./user')

router.use('/diceroll', diceroll)
router.use('/draw', draw)
router.use('/scoreboard', scoreboard)
router.use('/speedquiz', speedquiz)
router.use('/worldcup', worldcup)
router.use('/user',user)
router.get('/test', (req, res)=>{return res.status(200).json({test:true})})

module.exports = router