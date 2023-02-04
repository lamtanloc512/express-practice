const { log } = require('console');
const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_URI);
		log(`MongoDB Connected: ${connect.connection.host}`);
	} catch (err) {
		log(`Error when connect to DB: ${err}`);
		process.exit(1);
	}
};

module.exports = { connectDB };
