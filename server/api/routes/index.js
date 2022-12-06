const express = require('express')
const exampleRoutes = require('./example.route')

const router = express.Router()


router.use('/example', exampleRoutes)


module.exports = router;