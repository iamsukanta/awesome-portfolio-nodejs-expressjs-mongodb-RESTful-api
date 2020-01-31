const express = require('express')
const router = express.Router()
const usersapiAction = require('../actions/usersapi.action')

router.get('/seed', usersapiAction.createSeedingUser)
	// .post('/', usersapiAction.create)
	// .get('/', usersapiAction.list)
	// .get('/:id', usersapiAction.show)
	// .put('/:id', usersapiAction.update)
	// .delete('/:id', usersapiAction.destroy)

module.exports = router
