const express = require('express')
const router = express.Router()
const aboutmeAction = require('../actions/aboutmeapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', userMiddleware.checkToken, aboutmeAction.list)
.post('/create', userMiddleware.checkToken, aboutmeAction.create)

module.exports = router
