import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		// find all list in database
		const allLists = await prisma.list.findMany({
			where: {
				activeStatus: 'active',
			},
			include: {
				task: true,
			},
		});
		//send response to client
		res.status(200).json({data: allLists});
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
