const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SampleapiSchema = new Schema({
    //Schema Data
    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    created_by: { type : String },
    modified_by: { type : String }
});

SampleapiSchema.methods.setCreatedBy = function(user) {
    return this.created_by = user;
}

SampleapiSchema.methods.setModifiedBy = function(user) {
    return this.modified_by = user;
}

SampleapiSchema.methods.setModifiedAt = function() {
    return this.modified_at = new Date();
}


module.exports = mongoose.model('Uber', SampleapiSchema);
