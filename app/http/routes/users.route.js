const express = require('express')
const router = express.Router()
const sampleapiAction = require('../actions/usersapi.action')

router.post('/', usersapiAction.create)
	.get('/', usersapiAction.list)
	.get('/:id', usersapiAction.show)
	.put('/:id', usersapiAction.update)
	.delete('/:id', usersapiAction.destroy)

module.exports = router
