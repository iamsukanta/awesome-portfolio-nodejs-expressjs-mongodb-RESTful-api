const axios = require('axios');
// const bcrypt = require('bcrypt');
// Import model
User = require('../models/user.js');

module.exports = {
    create: async (req, res) => {
        let existUser = await User.find({ email: req.body.email});
        if(existUser.length < 1) {
            var user = new User();
            user.name = req.body.name;
            user.email = req.body.email;
            user.password = req.body.password;
            return user.save()
            .then(function(response) { 
                res.status(200).json({ message: "User Successfully Created."}); 
            }).catch(err => {
                res.status(400).json({ message: err});
            });    
            
        } else {
            res.status(400).json({ message: 'Eamil Already Exists'});
        }
        
    },

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

    update: (req, res) => {
        var id = req.params.id;
        return User.findById(id)
            .exec((err, user) => {
            if (err) { res.status(400).json(err);}
            else {
                user.name = req.body.name;
                user.email = req.body.email;
                user.password = req.body.password;
                user.save()
                .then(function(response) { 
                    res.status(200).json({message: "User successfylly updated.", success: true}) 
                }).catch(err => {
                    res.status(400).json({ message: err});
                });  
            }
        });
    },

    list: (req, res) => {
        return User.find({})
        .sort({created_at: -1})
        .exec((err, user) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: user, success: true})
        });
    },


    show: (req, res) => {
        var id = req.params.id;
        return User.findById(id)
            .exec((err, user) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: user, success: true})
        });
    },

    destroy: (req, res) => {
        var id = req.params.id;
        return User.findByIdAndRemove(id)
            .exec((err, sample) => {
            if (err) res.status(400).json(err);
            res.status(200).json({data: {message: 'User successfully deleted'}, success: true})
        });
    }
}
