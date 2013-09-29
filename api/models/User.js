/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
    email    : 'string',
    password : 'string'
    
  },

  beforeCreate: function (attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.hash(attrs.password, 10, function(err, hash) {
      if (err) return next(err);

      attrs.password = hash;
      next();
    });
  }

};
