const express = require('express')
const router = express.Router()
const sampleapiAction = require('../actions/sampleapi.action')

router.post('/', sampleapiAction.create)
	.get('/', sampleapiAction.list)
	.get('/:id', sampleapiAction.show)
	.put('/:id', sampleapiAction.update)
	.delete('/:id', sampleapiAction.destroy)

module.exports = router
