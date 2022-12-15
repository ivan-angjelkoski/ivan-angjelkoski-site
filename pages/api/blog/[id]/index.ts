// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../../lib/prisma';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const id = req.query.id as string;
	const blog = await prisma.post.findUnique({
		where: {
			id,
		},
	});
	res.status(200).json(blog);
}
