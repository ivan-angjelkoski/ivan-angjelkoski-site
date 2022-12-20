import Image from 'next/image';
import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Skills from './Skills';

type Props = {};

const IndexPage = (props: Props) => {
	return (
		<Container className="font-raleway ">
			<h1 className="text-5xl md:text-7xl py-10 md:py-14 bg-gradient-to-t from-blue-400 to-blue-200 text-transparent bg-clip-text">
				Welcome
			</h1>
			<div className="flex items-center flex-col-reverse md:flex-row tracking-wider">
				<p className="text-lg text-justify">
					My name is <b>Ivan Angjelkoski</b> and i am a front-end web developer
					with a solid background in JavaScript frameworks like <b>React</b> and{' '}
					<b>Next.js</b> and is also familiar with the MERN (MongoDB, Express,
					React, and Node.js) software stack. Currently Living In 🇲🇰 Macedonia.
				</p>
				<Image
					src={'/ivan_ang.jpg'}
					alt="ivan"
					width={200}
					height={100}
					// style={{ objectFit: 'cover' }}
					className="w-40 h-40 object-cover rounded-[50%] shrink-0 my-5 mx-10"
				/>
			</div>
			<div className="pt-10">
				<Skills />
			</div>
			<Footer />
		</Container>
	);
};

export default IndexPage;
