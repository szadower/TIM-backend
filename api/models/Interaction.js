/**
 * Interaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    sender : {
      type: 'string'
    },
    reciver : {
      type: 'string'
    },
    type : {
      type: 'string'
    },
    recived : {
      type : 'boolean'
    }
  }
};
