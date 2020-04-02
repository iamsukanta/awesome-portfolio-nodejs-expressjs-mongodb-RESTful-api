const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResumeSchema = new Schema({
    //Schema Data
    url: {
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

ResumeSchema.methods.setCreatedBy = function(user) {
  return this.created_by = user;
}

ResumeSchema.methods.setModifiedBy = function(user) {
  return this.modified_by = user;
}

ResumeSchema.methods.setModifiedAt = function() {
  return this.modified_at = new Date();
}

module.exports = mongoose.model('Resume', ResumeSchema);
