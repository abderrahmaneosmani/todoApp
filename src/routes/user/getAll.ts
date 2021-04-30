import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		// find all users in database
		const allUser = await prisma.user.findMany();
		//send response to client
		res.status(200).json(allUser);
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
