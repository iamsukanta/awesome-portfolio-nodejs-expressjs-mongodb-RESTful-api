// Import contact model
AboutmeService = require('../../services/aboutmeapi.service');

module.exports = {
  list: (req, res) => {
    return AboutmeService.list(req, res);
  },

  create: (req, res) => {
    return AboutmeService.create(req, res);
  },
}
