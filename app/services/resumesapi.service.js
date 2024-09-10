const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../configs/jwt.configs.js');
// Import model
Resume = require('../models/resume.js');

module.exports = {
  list: (req, res) => {
    return Resume.find({})
      .sort({ created_at: -1 })
      .exec((err, resumes) => {
        if (err) res.status(400).json(err);
        res.status(200).json({ data: resumes, success: true });
      });
  },

  latestResume: (req, res) => {
    return Resume.findOne({})
      .sort({ created_at: -1 })
      .exec((err, resume) => {
        if (err) res.status(400).json(err);
        res.status(200).json({ data: resume, success: true });
      });
  },

  create: async (req, res) => {
    var resume = new Resume();
    resume.url = req.body.url;
    resume.created_by = req.user._id;
    return resume
      .save()
      .then(function (data) {
        res
          .status(200)
          .json({ message: "Resume Link Successfully Created.", data: data });
      })
      .catch((err) => {
        res.status(400).json({ message: err });
      });
  },

  resumeDetails: async (req, res) => {
    let id = req.params.id;
    let resume = await Resume.findById(id);
    if(!resume) {
      return res.status(404).json({ message: 'Resume data not found.'})
    } else {
      return res.status(200).json({ data: resume });
    }
  },

  edit: async (req, res) => {
    let id = req.params.id;
    let resume = await Resume.findById(id);
    if(!resume) {
      return res.status(404).json({ message: 'Resume data not found.'})
    }
    resume.url = req.body.url;
    return resume.save()
    .then(function(data) { 
      return res.status(200).json({ message: "Resume Successfully Created.", data: data}); 
    }).catch(err => {
      return res.status(400).json({ message: err});
    });      
  },

  delete: async (req, res) => {
    let id = req.params.id;
    let resume = await Resume.findById(id);
    if(!resume) {
      return res.status(404).json({ message: 'Resume data not found.'})
    } else {
      await resume.delete();
      return res.status(200).json({ message: 'Resume successfully deleted.' });
    }
  },
};
