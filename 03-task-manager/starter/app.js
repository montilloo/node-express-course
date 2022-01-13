require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const { connectDB } = require('./db/connection');
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');
// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
	res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await app.listen(port, () => console.log(`server is running on port ${port}`));
	} catch (err) {
		console.log(err);
	}
}

start();

