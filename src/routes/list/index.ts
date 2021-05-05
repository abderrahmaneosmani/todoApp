import {Router} from 'express';
import {body} from 'express-validator';

import addList from './add';
import updateList from './update';
import getAllLists from './getAll';
import getLists from './get';
import deleteLists from './delete';

const list = Router();
// get all Lists
list.get('/', getAllLists);

//handle request
list.post(
	'/add',

	body('title').isString(),
	body('userId').isInt().toInt(),
	body('taskId').isInt().toInt(),

	addList,
);
list.put(
	'/update/:id',
	body('title').isString(),
	body('userId').isInt().toInt(),
	body('taskId').isInt().toInt(),

	updateList,
);
// get list by id
list.get('/:id', getLists);
// soft delete list by id
list.put('/delete/:id', deleteLists);

export default list;
