// Import contact model
AboutmeService = require('../../services/aboutmeapi.service');

module.exports = {
  list: (req, res) => {
    return AboutmeService.list(req, res);
  },

  aboutmeDetails: (req, res) => {
    return AboutmeService.aboutmeDetails(req, res);
  },

  create: (req, res) => {
    return AboutmeService.create(req, res);
  },

  edit: (req, res) => {
    return AboutmeService.edit(req, res);
  },
}
