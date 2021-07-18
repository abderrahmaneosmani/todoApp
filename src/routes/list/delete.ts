import {Response, Request} from 'express';
import {PrismaClient} from '@prisma/client';

// initialize  prisma

const prisma = new PrismaClient();
export default async (req: Request, res: Response): Promise<void> => {
	try {
		// get id

		let id = Number(req.params.id);

		// soft delete list
		const data: any = {
			activeStatus: 'delete',
		};

		// find list by id in database
		const list = await prisma.list.update({
			where: {
				id: id,
			},
			data,
		});
		//send response to client
		res.status(200).json({data: 'list deleted successfully '});
	} catch (error) {
		res.status(400).json({errors: error});
	}
};
