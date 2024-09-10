const express = require('express')
const router = express.Router()
const portfoliosAction = require('../actions/portfoliosapi.action')
const userMiddleware = require('../middlewares/user.middleware.js')

router.get('/', portfoliosAction.list)
  .post('/create', userMiddleware.checkToken, portfoliosAction.create)
  .get('/:id', userMiddleware.checkToken, portfoliosAction.portfolioDetails)
  .post('/edit/:id', userMiddleware.checkToken, portfoliosAction.edit)
  .delete('/:id', userMiddleware.checkToken, portfoliosAction.delete)

module.exports = router
