const express = require('express')
const controller = require('../controllers/example.controller')

const router = express.Router()

router
    .route('/')
    .get(controller.list) // get example
    .post(controller.create) // create example
    .delete(controller.remove) // delete example
    

module.exports = router;