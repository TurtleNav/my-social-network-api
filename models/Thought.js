const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema({
	thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},

	// implement a getter method to format the timestamp on query
	createdAt: {type: Date, default: Date.now},

	username: {type: String, required: true},

	reactions: [reactionSchema]
});

// TODO: Implement a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
