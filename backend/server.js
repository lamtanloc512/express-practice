const express = require('express');
const { connectDB } = require('./config/db');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const goalRouter = require('./routes/goals');
const userRouter = require('./routes/users')

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server start at port: ${port}`));
