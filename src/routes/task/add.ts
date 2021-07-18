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
		const {title, userId, listId} = req.body;

		//create user object

		const data: any = {
			title,
			userId,
			listId,
		};

		// create task in database
		const addTask = await prisma.task.create({
			data,
		});
		// send response to client

		res.status(201).json({user: addTask});
		// send error to client
	} catch (error) {
		res.json({errors: error});
	}
};
