const express = require('express')
const router = express.Router()
const resumesAction = require('../actions/resumesapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', resumesAction.list)
.post('/create', userMiddleware.checkToken, resumesAction.create)
.get('/:id', resumesAction.resumeDetails)
.post('/edit/:id', userMiddleware.checkToken, resumesAction.edit)
.delete('/:id', userMiddleware.checkToken, resumesAction.delete)

module.exports = router
