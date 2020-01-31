const axios = require('axios');
// const bcrypt = require('bcrypt');
// Import model
User = require('../models/user.js');

module.exports = {
    // create: (req, res) => {
    //     var user = new User();
    //     return user.save()
    //     .then(function(response) { 
    //         res.json(response); 
    //     })
    //     .error(function(err) { res.send(err); });     
    // },

    createSeedingUser: async(req, res) => {
        let seedingUser = await require ('../utils/userseedingdata.js');

        seedingUser.data.forEach( async(user) => {
            // user.password = bcrypt.hashSync(user.password, 10);
            let existUser = await User.find({ email: user.email});
            if(existUser.length < 1) {
                var newUser = new User(user);
                newUser.save()
                .then(data => {
                    res.status(201).json({ message: 'Users table successfully Created', success: true})
                }).catch(err => {
                    res.status(400).json({ message: err});
                });
            } else {
                res.status(400).json({ message: 'Eamil Already Exists'});
            }
        })     
    },

    // update: (req, res) => {
    //     var user = new User();
    //     var id = req.params.id;
    //     return user.findById(id)
    //         .exec((err, user) => {
    //         if (err) { res.status(400).json(err);}
    //         else {
    //             user.save()
    //             .then(function(response) { 
    //                 res.json(response); 
    //             })
    //         }
    //     });
    // },

    // list: (req, res) => {
    //     return User.find({})
    //     .sort({created_at: -1})
    //     .exec((err, user) => {
    //         if (err) res.status(400).json(err);
    //         res.status(200).json({data: user, success: true})
    //     });
    // },


    // show: (req, res) => {
    //     var id = req.params.id;
    //     return User.findById(id)
    //         .exec((err, user) => {
    //         if (err) res.status(400).json(err);
    //         res.status(200).json({data: user, success: true})
    //     });
    // },

    // destroy: (req, res) => {
    //     var id = req.params.id;
    //     return User.findByIdAndRemove(id)
    //         .exec((err, sample) => {
    //         if (err) res.status(400).json(err);
    //         res.status(200).json({data: {message: 'Uber Service successfully deleted'}, success: true})
    //     });
    // }
}
