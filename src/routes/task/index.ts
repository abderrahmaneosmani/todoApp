import {Router} from 'express';
import {body} from 'express-validator';

import addTask from './add';
import updateTask from './update';
import getAllTasks from './getAll';
import getTask from './get';
import deleteTask from './delete';

const task = Router();
// get all tasks
task.get('/', getAllTasks);

//handle request
task.post(
	'/add',

	body('title').isString(),
	body('userId').isInt().toInt(),
	body('listId').isInt().toInt(),

	addTask,
);
task.put(
	'/u0pdate/:id',
	body('title').isString(),
	body('userId').isInt().toInt(),
	body('listId').isInt().toInt(),
	updateTask,
);
// get task by id
task.get('/:id', getTask);
// soft delete task by id
task.put('/delete/:id', deleteTask);

export default task;
