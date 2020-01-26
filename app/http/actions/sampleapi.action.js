// Import contact model
SampleapiService = require('../../services/sampleapi.service');

module.exports = {
    list: (req, res) => {
        return SampleapiService.list(req, res);
    },

    create: (req, res) => {
        return SampleapiService.create(req, res);
    },

    update: (req, res) => {
        return SampleapiService.update(req, res);
    },

    show: (req, res) => {
        return SampleapiService.show(req, res);
    },

    destroy: (req, res) => {
        return SampleapiService.destroy(req, res);
    }
}
