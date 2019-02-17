'use strict'

const express = require('express')
const router = express.Router()

const create=require('./create')
const login=require('./login')

router.post('/create',create.Create)
router.post('/login',login.Login)

module.exports=router