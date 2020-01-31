// Import contact model
UsersService = require('../../services/usersapi.service');

module.exports = {
    list: (req, res) => {
        return UsersService.list(req, res);
    },

    create: (req, res) => {
        return UsersService.create(req, res);
    },

    createSeedingUser: (req, res) => {
        return UsersService.createSeedingUser(req, res);
    },

    update: (req, res) => {
        return UsersService.update(req, res);
    },

    show: (req, res) => {
        return UsersService.show(req, res);
    },

    destroy: (req, res) => {
        return UsersService.destroy(req, res);
    }
}
