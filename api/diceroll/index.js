'use strict'

const express = require('express')
const router = express.Router()

const rollDice=require('./rollDice')

router.get('/rollDice',rollDice.RollDice)

module.exports = router