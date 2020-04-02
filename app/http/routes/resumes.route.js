const express = require('express')
const router = express.Router()
const resumesAction = require('../actions/resumesapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', userMiddleware.checkToken, resumesAction.list)
.post('/create', userMiddleware.checkToken, resumesAction.create)

module.exports = router
