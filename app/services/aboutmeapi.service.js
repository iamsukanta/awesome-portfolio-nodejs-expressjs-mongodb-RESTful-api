const axios = require('axios');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../configs/jwt.configs.js');
// Import model
Aboutme = require('../models/aboutme.js');

module.exports = {
  list: (req, res) => {
    return Aboutme.findOne()
    .sort({ created_at: -1 })
    .exec((err, aboutme) => {
      if (err) res.status(400).json(err);
      console.log(aboutme);
      res.status(200).json({data: aboutme, success: true})
    });
  },

  create: async (req, res) => {
    var aboutme = new Aboutme();
    aboutme.description = req.body.description;
    aboutme.image = req.file.filename;
    aboutme.created_by = req.user._id;
    return aboutme.save()
    .then(function(data) { 
      res.status(200).json({ message: "aboutme Link Successfully Created.", data: data}); 
    }).catch(err => {
      res.status(400).json({ message: err});
    });      
  },
}
