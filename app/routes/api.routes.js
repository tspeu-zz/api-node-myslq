const express = require('express')

const router = express.Router()

const usuarios = require('./user.routes')
// var data = require('./data.routes')


router.use('/user', usuarios);
// router.use('/ayuda',data);


module.exports = router;