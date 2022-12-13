import Link from 'next/link';
import React from 'react';
import { prisma } from '../../../lib/prisma';
import Container from '../../Container';
import { marked } from 'marked';
import hljs from 'highlight.js';

type Props = {
	params: {
		blogId: string;
	};
};

export const revalidate = 86000;
export const dynamic = 'auto';

const getBlog = async (blogId: string) => {
	const blog = await prisma.post.findUnique({
		where: { id: blogId },
		include: { author: true },
	});
	return blog;
};

const BlogPage = async ({ params }: Props) => {
	const blog = await getBlog(params.blogId);
	if (!blog) return <Container>Blog Not Found</Container>;
	const date = new Date(blog.publishedAt).toLocaleDateString('en-US', {
		dateStyle: 'medium',
	});

	// const markdown = marked.parse(blog.content!, { gfm: true });
	const markdown = marked.parse(blog.content!, {
		gfm: true,
		breaks: true,
		highlight: function (code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'javascript';
			return hljs.highlight(code, { language }).value;
		},
		langPrefix: 'hljs language-javascript',
	});
	return (
		<Container className="font-raleway">
			<Link
				href={'/blog'}
				className="p-2 rounded-md hover:bg-blue-300/10 font-sans"
			>
				&larr; Back
			</Link>
			<img
				src={blog.image}
				className="w-full my-5"
			/>
			<div className="border-b-2 border-blue-300 pb-2 my-10">
				<h2 className="text-5xl my-3">{blog?.title}</h2>
				<h4 className="text-sm opacity-70">
					By {blog?.author.name} - {date}
				</h4>
			</div>
			<div
				className="markdown prose prose-lg prose-invert font-poppins"
				dangerouslySetInnerHTML={{ __html: markdown }}
			></div>
		</Container>
	);
};

export async function generateStaticParams() {
	const posts = await prisma.post.findMany();

	return posts.map((post) => ({
		blogId: post.id,
	}));
}

export default BlogPage;
