const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../configs/jwt.configs.js');

// Import model
Blog = require('../models/blog.js');

module.exports = {
  list: (req, res) => {
    return Blog.find({})
    .sort({created_at: -1})
    .exec((err, blogs) => {
      if (err) res.status(400).json(err);
      res.status(200).json({data: blogs, success: true})
    });
  },

  create: async (req, res) => {
    var blog = new Blog();
    blog.title = req.body.title;
    blog.image = req.file.filename;
    blog.description = req.body.description;
    blog.created_by = req.user._id;
    return blog.save()
    .then(function(data) { 
      res.status(200).json({ message: "Blog Successfully Created.", data: data}); 
    }).catch(err => {
      res.status(400).json({ message: err});
    });      
  },
}
