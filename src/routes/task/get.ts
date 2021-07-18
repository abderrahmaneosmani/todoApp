import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		//get id
		let id = Number(req.params.id);
		// if params is not a number send status code 404
		if (Number(isNaN(id)) === 1) {
			res.statusCode = 404;
		}
		// find task by id in database
		const task = await prisma.task.findMany({
			where: {
				id: id,
				activeStatus: 'active',
			},
		});
		//send response to client
		res.status(200).json({data: task});
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
