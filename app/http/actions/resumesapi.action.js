// Import contact model
ResumeService = require('../../services/resumesapi.service');

module.exports = {
  list: (req, res) => {
    return ResumeService.list(req, res);
  },

  latestResume: (req, res) => {
    return ResumeService.latestResume(req, res);
  },

  create: (req, res) => {
    return ResumeService.create(req, res);
  },

  resumeDetails: (req, res) => {
    return ResumeService.resumeDetails(req, res);
  },

  edit: (req, res) => {
    return ResumeService.edit(req, res);
  },

  delete: (req, res) => {
    return ResumeService.delete(req, res);
  },
}
