const express = require('express')
const router = express.Router()
const resumesAction = require('../actions/resumesapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', userMiddleware.checkToken, resumesAction.list)
.get('/latest', resumesAction.latestResume)
.post('/create', userMiddleware.checkToken, resumesAction.create)
.get('/:id', userMiddleware.checkToken, resumesAction.resumeDetails)
.post('/edit/:id', userMiddleware.checkToken, resumesAction.edit)
.delete('/:id', userMiddleware.checkToken, resumesAction.delete)

module.exports = router
