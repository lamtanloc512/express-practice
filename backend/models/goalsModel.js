const mongoose = require('mongoose');

const goalSchemea = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'Please add a text value'],
		},
	},
	{
		timestamp: true,
	},
);

module.exports = mongoose.model('Goal', goalSchemea);
