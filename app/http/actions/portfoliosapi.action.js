// Import contact model
PortfolioService = require('../../services/portfoliosapi.service');

module.exports = {
  list: (req, res) => {
      return PortfolioService.list(req, res);
  },

  create: (req, res) => {
      return PortfolioService.create(req, res);
  },
}
