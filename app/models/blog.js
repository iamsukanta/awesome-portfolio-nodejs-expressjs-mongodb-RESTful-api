const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    //Schema Data
    title: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },

    created_at: {
        type: Date,
        default: Date.now
    },
    modified_at: Date,
    created_by: { type : String },
    modified_by: { type : String }
});

BlogSchema.methods.setCreatedBy = function(user) {
    return this.created_by = user;
}

BlogSchema.methods.setModifiedBy = function(user) {
    return this.modified_by = user;
}

BlogSchema.methods.setModifiedAt = function() {
    return this.modified_at = new Date();
}


module.exports = mongoose.model('Blog', BlogSchema);
