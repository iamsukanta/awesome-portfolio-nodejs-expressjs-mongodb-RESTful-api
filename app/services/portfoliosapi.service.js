const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../configs/jwt.configs.js');
const portfolio = require('../models/portfolio.js');
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
    var portfolio = new Portfolio();
    portfolio.title = req.body.title;
    portfolio.url = req.body.url;
    portfolio.description = req.body.description;
    portfolio.development_technology = req.body.development_technology;
    portfolio.created_by = req.user._id;
    return portfolio.save()
    .then(function(data) { 
      res.status(200).json({ message: "Portfolio Successfully Created.", data: data}); 
    }).catch(err => {
      res.status(400).json({ message: err});
    });      
  },

  portfolioDetails: async (req, res) => {
    let id = req.params.id;
    let portfolio = await Portfolio.findById(id);
    if(!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found.'})
    } else {
      return res.status(200).json({ data: portfolio });
    }
  },

  edit: async (req, res) => {
    let id = req.params.id;
    let portfolio = await Portfolio.findById(id);
    if(!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found.'})
    }
    portfolio.title = req.body.title;
    portfolio.url = req.body.url;
    portfolio.description = req.body.description;
    portfolio.development_technology = req.body.development_technology;
    return portfolio.save()
    .then(function(data) { 
      return res.status(200).json({ message: "Portfolio Successfully Created.", data: data}); 
    }).catch(err => {
      return res.status(400).json({ message: err});
    });      
  },

  delete: async (req, res) => {
    let id = req.params.id;
    let portfolio = await Portfolio.findById(id);
    if(!portfolio) {
      return res.status(404).json({ message: 'Portfolio data not found.'})
    } else {
      await portfolio.delete();
      return res.status(200).json({ message: 'Portfolio successfully deleted.' });
    }
  },
}
