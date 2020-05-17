const express = require('express')
const router = express.Router()
const portfoliosAction = require('../actions/portfoliosapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', portfoliosAction.list)
  .post('/create', userMiddleware.checkToken, portfoliosAction.create)

module.exports = router
