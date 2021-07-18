import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		// find all tasks in database
		const allTasks = await prisma.task.findMany({
			where: {
				activeStatus: 'active',
			},
		
		});
		//send response to client
		res.status(200).json({data: allTasks});
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
