const Restaurant = require('../models/Restaurant')
const mongoose = require('mongoose')

//const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
	try {
		// console.log(resturants);
		res.json({
			success: true,
			msg: 'show all restaurants',
			data: restaurants,
		})
	} catch (err) {
		next(err)
	}
}

const getRestaurant = async (req, res, next) => {
	try {
		const { id } = req.params
		const restaurant = await Restaurant.findById(id)
		res.json({
			success: true,
			msg: 'show selected resturant',
			data: restaurant,
		})
	} catch (err) {
		next(err)
	}
}

module.exports = {
	getRestaurants,
	getRestaurant,
}
