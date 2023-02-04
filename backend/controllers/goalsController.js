const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const getGoals = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error('Please add text');
	}

	res.status(200).json({
		message: 'Hello World From Get',
	});
});
const createGoals = asyncHandler(async (req, res) => {
	res.json({
		message: 'Hello World From Post',
	});
});
const editGoals = asyncHandler((req, res) => {
	res.json({
		message: 'Hello World From Put',
	});
});
const deleteGoals = asyncHandler((req, res) => {
	res.json({
		message: 'Hello World From Delete',
	});
});

module.exports = {
	getGoals,
	createGoals,
	editGoals,
	deleteGoals,
};
