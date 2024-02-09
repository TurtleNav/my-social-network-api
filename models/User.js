const { Schema, model } = require('mongoose');
// TODO: Implement both Friend and Thought models and import the schemas here

const userSchema = new Schema({
	// TODO: Implement some sort of trimming hook on username
	username: {type: String, required: true, unique: true},

	// TODO: Implement an email validator
	email: {type: String, required: true, unique: true, validate: {validator: isEmail, message: "Email is invalid"}},

	// TODO: Implement thoughts array

	thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],

	// TODO: Implement friends array that references other users
	friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

function isEmail(string) {
	// Simple tests before running expensive regex. Handles:
	//	1.) No string
	//	2.) String consisting only of whitespace
	//	3.) No @ symbol present
	// Regex handles most other cases
	if (!string || !string.trim(' ') || !string.includes('@')) {
		return false;
	}
	return !!string.match(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/g);
}

const User = model('User', userSchema);

module.exports = User;
