'use client';

import Container from '../Container';
import React, { useState } from 'react';
import { Post } from '@prisma/client';
type Props = {};

const AddBlogPage = (props: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSubmited, setIsSubmited] = useState(false);
	const [data, setData] = useState({
		title: '',
		description: '',
		image: '',
		content: '',
	});
	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const addPost = async (data: Partial<Post>) => {
		setIsLoading(true);
		setIsError(false);
		setIsSubmited(false);
		try {
			console.log(`${process.env.NEXT_VERCEL_URL}/api/addblog`);
			const req = await fetch(`/api/addblog`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/JSON',
				},
				body: JSON.stringify(data),
			});
			console.log(req);

			if (!req.ok) {
				throw new Error('Failed');
			}
			setIsSubmited(true);
		} catch (e) {
			setIsError(true);
			setIsSubmited(false);
		} finally {
			setIsLoading(false);
		}
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addPost(data);
	};
	return (
		<Container>
			<h1 className="text-4xl my-10">Add Blog</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col">
					<label htmlFor="title">Title:</label>
					<input
						onChange={handleChange}
						value={data.title}
						type="text"
						name="title"
						id="title"
						required
						minLength={3}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="description">Description:</label>
					<input
						onChange={handleChange}
						value={data.description}
						type="text"
						name="description"
						id="description"
						required
						minLength={3}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="image">Image:</label>
					<input
						onChange={handleChange}
						value={data.image}
						type="text"
						name="image"
						id="image"
						required
						minLength={3}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="content">Content:</label>
					<textarea
						onChange={handleChange}
						value={data.content}
						className="p-5"
						name="content"
						id="content"
						required
						rows={20}
						minLength={10}
					/>
				</div>
				<div className="flex justify-end">
					<button
						type="submit"
						className="p-2 rounded-md border border-blue-300 block w-full my-2"
					>
						{isLoading ? 'Loading..' : isSubmited ? 'Submited!' : 'Add'}
					</button>
				</div>
			</form>
		</Container>
	);
};

export default AddBlogPage;
