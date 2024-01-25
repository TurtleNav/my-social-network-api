const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
	thoughtText: {type: String, required: true, minLength: 1, maxLength: 280},

	// implement a getter method to format the timestamp on query
	createdAt: {type: Date, default: Date.now},

	username: {type: String, required: true}

	// TODO: Implement reactionSchema, import it, then place in the below array
	//rections: []
});

// TODO: Implement a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
