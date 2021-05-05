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

		// create constructor for list
		const {title, userId,taskId} = req.body;

		//create list object

		const data: any = {
			title,
			userId,
			taskId,
		};

		// update  list in database
		const updateList = await prisma.list.update({
			where: {
				id: id,
			},
			data,
		});
		// send response to client

		res.status(200).json({user: updateList});
		// send error to client
	} catch (error) {
		res.json({errors: error});
	}
};
