const axios = require('axios');
// Import model
Sampleapi = require('../models/sampleapi');

module.exports = {
    create: (req, res) => {
        var sampleapi = new Sampleapi();
        // sampleapi.data = req.body.data;
        return sampleapi.save()
        .then(function(response) { 
            res.json(response); 
        })
        .error(function(err) { res.send(err); });     
    },

    update: (req, res) => {
        var sampleapi = new Sampleapi();
        var id = req.params.id;
        return Sampleapi.findById(id)
            .exec((err, sampleapi) => {
            if (err) { res.status(400).json(err);}
            else {
                sampleapi.save()
                .then(function(response) { 
                    res.json(response); 
                })
            }
        });
    },

    list: (req, res) => {
        return Sampleapi.find({})
        .sort({created_at: -1})
        .exec((err, sampleapi) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: sampleapi, success: true})
        });
    },


    show: (req, res) => {
        var id = req.params.id;
        return Sampleapi.findById(id)
            .exec((err, sampleapi) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: sampleapi, success: true})
        });
    },

    destroy: (req, res) => {
        var id = req.params.id;
        return Sampleapi.findByIdAndRemove(id)
            .exec((err, sample) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: {message: 'Uber Service successfully deleted'}, success: true})
        });
    }
}
