const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
	name: {
		type: String,
		required: [true, 'The name field is required'],
		maxLength: [
			50,
			'The name field should contain a maximum of 50 characters',
		],
	},

	description: {
		type: String,
		required: [true, 'The description field is required'],
	},
	img: {
		type: String,
	},

	city: {
		type: Schema.ObjectId,
		ref: 'City',
		required: [true, 'Please add a city'],
	},
	tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)
