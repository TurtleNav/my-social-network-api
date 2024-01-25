const { Schema, model } = require('mongoose');
// TODO: Implement both Friend and Thought models and import the schemas here

const userSchema = new Schema({
	// TODO: Implement some sort of trimming hook on username
	username: {type: String, required: true, unique: true},

	// TODO: Implement an email validator
	email: {type: String, required: true, unique: true)

	// TODO: Implement thoughts array
	// TODO: Implement friends array that references other users
});

const User = model('user', userSchema);

module.exports = User;
