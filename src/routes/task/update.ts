import {Request, Response} from 'express';
import {PrismaClient} from '@prisma/client';

import {body, validationResult} from 'express-validator';

const prisma = new PrismaClient();
export default async (req: Request, res: any): Promise<void> => {
	try {
		// get id form req params

		const id = Number(req.params.id);
		// if params is not a number send status code 404
		if (Number(isNaN(id)) === 1) {
			res.statusCode = 404;
		}

		// Finds the validation errors in this request and wraps them in an object with handy functions
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		// create constructor for task
		const {title, userId, listId} = req.body;

		//create task object

		const data: any = {
			title,
			userId,
			listId,
		};

		// update  task in database
		const updateTask = await prisma.task.update({
			where: {
				id: id,
			},
			data,
		});
		// send response to client

		res.status(200).json({user: updateTask});
		// send error to client
	} catch (error) {
		res.json({errors: error});
	}
};
