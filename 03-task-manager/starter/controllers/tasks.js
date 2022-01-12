const Task = require('../models/Tasks');

const getAllTasks = async (req, res) => {
	try{
		const tasks = await Task.find({});
		res.status(200).json({tasks});
	} catch (error) {
		res.status(500).json({mag: error});
	}
	res.send('all items from the file');
}

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(201).json({task});
	} catch (error) {
		res.status(500).json({mag: error});
	}
}

const getTask = async (req, res) => {
	try {
		const {id: taskID } = req.params;
		const task = await Task.findOne({_id: taskID});
		if(!task) {
			return res.status(404).json({msg: `${taskID}的任务不存在`});
		}
		res.stats(200).json({task});
	} catch(error) {
		res.status(500).json({msg: error});
	}
}

const updateTask = (req, res) => {
	res.send('update Task');
}

const deleteTask = (req, res) => {
	res.send('delete Task');
}

module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
};
