import {Router} from 'express';
import {body} from 'express-validator';

import addUser from './add';
import getAllUser from './getAll';

const user = Router();
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

export default user;
