// Import contact model
ResumeService = require('../../services/resumesapi.service');

module.exports = {
  list: (req, res) => {
    return ResumeService.list(req, res);
  },

  create: (req, res) => {
    return ResumeService.create(req, res);
  },
}
