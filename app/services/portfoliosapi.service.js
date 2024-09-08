const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../configs/jwt.configs.js');
// Import model
Portfolio = require('../models/portfolio.js');

module.exports = {
  list: (req, res) => {
    return Portfolio.find({})
    .sort({created_at: -1})
    .exec((err, portfolios) => {
      if (err) res.status(400).json(err);
      res.status(200).json({data: portfolios, success: true})
    });
  },

  create: async (req, res) => {
    console.log(req.body, "dd");
    var portfolio = new Portfolio();
    portfolio.title = req.body.title;
    portfolio.url = req.body.url;
    portfolio.description = req.body.description;
    portfolio.created_by = req.user._id;
    return portfolio.save()
    .then(function(data) { 
      res.status(200).json({ message: "Portfolio Successfully Created.", data: data}); 
    }).catch(err => {
      res.status(400).json({ message: err});
    });      
  },
}
