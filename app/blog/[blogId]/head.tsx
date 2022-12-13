import { prisma } from '../../../lib/prisma';

const getBlog = async (blogId: string) => {
	const blog = await prisma.post.findUnique({
		where: { id: blogId },
		select: {
			title: true,
			image: true,
			description: true,
			id: true,
		},
	});
	return blog;
};

export default async function Head({ params }: { params: { blogId: string } }) {
	const blog = await getBlog(params.blogId);
	const title = blog?.title + ' - Ivan Angjelkoski';
	return (
		<>
			<title>{title}</title>
			<meta
				content="width=device-width, initial-scale=1"
				name="viewport"
			/>
			<meta
				property="og:title"
				content={title}
			/>
			<meta
				property="og:type"
				content="blog"
			/>
			<meta
				property="og:description"
				content={blog?.description}
			/>
			<meta
				property="og:url"
				content={`https://ivan-angjelkoski-site.vercel.app/blog/${blog!.id}`}
			/>
			<meta
				property="og:image"
				content={blog!.image}
			/>
			<link
				rel="icon"
				href="/favicon.ico"
			/>
		</>
	);
}
