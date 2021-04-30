import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

import {body, validationResult} from 'express-validator';

const prisma = new PrismaClient();
export default async (req: Request, res: any): Promise<void> => {
	try {
		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		// create constructor for user
		const {username, email, password} = req.body;

		//create user object

		const data: any = {
			username,
			email,
			password,
		};

		// create user in database
		const addUser = await prisma.user.create({
			data,
		});
		// send response to client

		res.status(201).json({user: data});
		// send error to client
	} catch (error) {
		res.json({errors: error});
	}
};
