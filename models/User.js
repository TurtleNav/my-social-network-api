const { Schema, model } = require('mongoose');
// TODO: Implement both Friend and Thought models and import the schemas here

const userSchema = new Schema({
	// TODO: Implement some sort of trimming hook on username
	username: {type: String, required: true, unique: true},

	// TODO: Implement an email validator
	email: {type: String, required: true, unique: true},

	// TODO: Implement thoughts array

	thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],

	// TODO: Implement friends array that references other users
	friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

const User = model('User', userSchema);

module.exports = User;
