const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
	// Default value is set to a new ObjectId (not sure if there's anything todo here)
	reactionId: [Schema.Types.ObjectId],

	reactionBody: {type: String, required: true, maxLength: 280},

	username: {type: String, required: true},

	// implement a getter method to format the timestamp on query
	createdAt: {type: Date, default: Date.now},
});

module.exports = reactionSchema;
