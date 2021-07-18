import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		let id = Number(req.params.id);
		// find user by id in database
		const user = await prisma.user.findMany({
			where: {
				id: id,
				activeStatus: 'active',
			},
			include:{
				tasks:true
			}
		});
		//send response to client
		res.status(200).json({data: user});
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
