/**
 * Entry
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

    date: {
      type: 'date',
      required: true
    },

    content: {
      type: 'text'
    },

    tags: {
      type: 'array'
    },

    user: {
      model: 'User'
    }

  }

};
