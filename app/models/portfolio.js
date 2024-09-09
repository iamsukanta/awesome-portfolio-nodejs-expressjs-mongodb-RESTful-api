const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    //Schema Data
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    development_technology: {
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

PortfolioSchema.methods.setCreatedBy = function(user) {
  return this.created_by = user;
}

PortfolioSchema.methods.setModifiedBy = function(user) {
  return this.modified_by = user;
}

PortfolioSchema.methods.setModifiedAt = function() {
  return this.modified_at = new Date();
}

module.exports = mongoose.model('Portfolio', PortfolioSchema);
