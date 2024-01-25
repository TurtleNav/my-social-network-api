const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
	thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},

	// Return ISO-8601 time string
	createdAt: {type: Date, default: Date.now, get: (date) => date.toISOString()},

	username: {type: String, required: true},

	reactions: [reactionSchema]
},
{
	// Necessary to specify to Mongoose that we want virtuals to be supported
	toJSON: {
		virtuals: true
	}
});

thoughtSchema.virtual('reactionCount').get(
	function() {
    return this.reactions.length;
	}
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
