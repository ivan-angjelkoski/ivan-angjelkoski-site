// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

type Data = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data: Partial<Post> = req.body;
	console.log('API:', data);

	if (data.content && data.title && data.description && data.image) {
		const post = await prisma.post.create({
			data: {
				description: data.description!,
				title: data.title!,
				content: data.content!,
				image: data.image!,
				authorId: '1991258a-c16b-4961-89b1-80b6d727e49f',
				published: true,
			},
		});
		res.status(200).json(post);
	} else {
		res.status(400).json({ message: 'No Data' });
	}
}
