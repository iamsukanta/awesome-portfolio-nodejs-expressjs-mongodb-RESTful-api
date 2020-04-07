const express = require('express')
const router = express.Router()
const blogsapiAction = require('../actions/blogsapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router .get('/', userMiddleware.checkToken, blogsapiAction.list)
    .post('/create', userMiddleware.checkToken, blogsapiAction.create)

module.exports = router
