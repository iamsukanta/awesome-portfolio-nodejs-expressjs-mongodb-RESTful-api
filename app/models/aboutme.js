const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AboutmeSchema = new Schema({
    //Schema Data
    image: {
      type: String,
      required: false
    },

    description: {
      type: String,
      required: false
    },
    created_by: {
      type : Schema.ObjectId, ref : 'User', required:false ,
    },

    created_at: {
      type: Date,
      default: Date.now
    },
    modified_at: Date,
});

AboutmeSchema.methods.setCreatedBy = function(user) {
  return this.created_by = user;
}

AboutmeSchema.methods.setModifiedBy = function(user) {
  return this.modified_by = user;
}

AboutmeSchema.methods.setModifiedAt = function() {
  return this.modified_at = new Date();
}

module.exports = mongoose.model('Aboutme', AboutmeSchema);
