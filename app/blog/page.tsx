import React from 'react';
import { prisma } from '../../lib/prisma';
import Container from '../Container';
import BlogItem from './BlogItem';

type Props = {};

export const revalidate = 86400;
// export const dynamic = 'force-dynamic';

const getBlogs = async () => {
	return await prisma.post.findMany({
		// include: { author: { select: { name: true } } },
		select: {
			author: {
				select: { name: true },
			},
			description: true,
			id: true,
			publishedAt: true,
			title: true,
		},
		orderBy: {
			publishedAt: 'desc',
		},
	});
};

const BlogsPage = async (props: Props) => {
	const blogs = await getBlogs();

	return (
		<Container>
			<h1 className="text-4xl py-10 font-raleway">Blogs</h1>
			<div>
				{blogs.map((blog) => (
					<BlogItem
						blog={blog}
						key={blog.id}
					/>
				))}
			</div>
		</Container>
	);
};

export default BlogsPage;
