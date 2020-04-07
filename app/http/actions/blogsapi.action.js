// Import contact model
BlogService = require('../../services/blogsapi.service');

module.exports = {
  list: (req, res) => {
      return BlogService.list(req, res);
  },

  create: (req, res) => {
      return BlogService.create(req, res);
  },
}
