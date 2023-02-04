const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const port = process.env.PORT || 5000;
const app = express();

const goalRouter = require('./routes/goals');

app.use('/api/goals', goalRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server start at port: ${port}`));
