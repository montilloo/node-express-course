const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, '必须提供姓名'],
		trim: true,
		maxlength: [20, '不能超过20个字符']
	},
	completed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Task', TaskSchema);
