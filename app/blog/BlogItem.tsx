import { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	blog: {
		id: string;
		author: {
			name: string | null;
		};
		title: string;
		description: string;
		publishedAt: Date;
	};
};

const BlogItem = ({
	blog: { description, id, publishedAt, title, author },
}: Props) => {
	const date = new Date(publishedAt).toLocaleDateString('en-US', {
		dateStyle: 'medium',
	});
	return (
		<div className="font-raleway mb-14 ">
			<div>
				<div className="border-b-2 border-blue-400 pb-1">
					<Link
						className="text-4xl hover:text-blue-300 transition-colors duration-150"
						href={`/blog/${id}`}
					>
						{title}
					</Link>
					<h4 className="text-sm opacity-70">
						By {author.name} - {date}
					</h4>
				</div>
				<div>
					<p className="my-2">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default BlogItem;
