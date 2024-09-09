// Import contact model
PortfolioService = require('../../services/portfoliosapi.service');

module.exports = {
  list: (req, res) => {
      return PortfolioService.list(req, res);
  },

  create: (req, res) => {
    return PortfolioService.create(req, res);
  },

  portfolioDetails: (req, res) => {
    return PortfolioService.portfolioDetails(req, res);
  },

  edit: (req, res) => {
    return PortfolioService.edit(req, res);
  },

  delete: (req, res) => {
    return PortfolioService.delete(req, res);
  },
}
