import {Router} from 'express';
import {body} from 'express-validator';

import addUser from './add';
import updateUser from './update';
import getAllUser from './getAll';
import getUser from './get';
import deleteUser from './delete';

const user = Router();
// get all users
user.get('/', getAllUser);

//handle request
user.post(
	'/add',
	//username must be string no empty
	body('username').isString(),
	// email must be string no empty
	body('email').isEmail(),
	//password must be string no empty min length  is 8  chars
	body('password').isString().isLength({min: 8}),

	addUser,
);
user.put(
	'/update/:id', //username must be string no empty
	body('username').isString(),
	//password must be string no empty min length  is 8  chars
	body('password').isString().isLength({min: 8}),
	updateUser,
);
// get user by id
user.get('/:id', getUser);
// soft delete user by id
user.put('/delete/:id', deleteUser);

export default user;
