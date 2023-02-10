const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const formatDate = require('../utils/formatDate.js');


// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1,
      max: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => formatDate(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the amount of tags associated with an application
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
