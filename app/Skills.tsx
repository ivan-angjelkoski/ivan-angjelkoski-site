import React from 'react';
import { FaReact, FaNode } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import {
	SiApollographql,
	SiTailwindcss,
	SiMongodb,
	SiPrisma,
	SiChakraui,
	SiRedux,
	SiFramer,
	SiExpress,
} from 'react-icons/si';

type Props = {};
// const variants = {
// 	initial: { x: -20, opacity: 0 },
// 	inView: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
// };
// const viewport = { once: true, margin: '100px 100px 100px 100px' };

const icons = [
	FaReact,
	SiRedux,
	TbBrandNextjs,
	SiMongodb,
	FaNode,
	SiExpress,
	SiTailwindcss,
	SiPrisma,
	SiChakraui,
	SiFramer,
	SiApollographql,
];

const Skills = (props: Props) => {
	return (
		<div className="skills_section border-t">
			<h1 className="text-3xl my-10">Skills</h1>
			<div className="flex justify-center flex-wrap">
				{icons.map((Icon) => (
					<span className="text-5xl my-3 mx-6 hover:text-blue-100 hover:[filter:drop-shadow(0px_0px_20px_#ffffff88)] transition-all duration-200">
						<Icon />
					</span>
				))}
			</div>
			<p>
				I am a highly skilled programmer with a diverse range of technical
				expertise. In my previous roles, I have gained significant experience
				using a variety of programming languages and frameworks, including
				React, NextJS, Express, MongoDB, SQL, Prisma, Tailwindcss, Chakraui, and
				GraphQL.
			</p>
			<p>
				Starting with React, I have a strong understanding of the library's core
				principles and have used it to build dynamic, responsive user interfaces
				for a variety of web applications. I am well-versed in using state
				management libraries such as Redux or Context API to manage application
				state in a scalable and maintainable way.
			</p>
			<p>
				I have also gained experience working with NextJS, a framework that
				allows developers to build server-rendered React applications with
				automatic code splitting and optimized performance. This has allowed me
				to create applications that are both fast and easy to maintain.
			</p>
			<p>
				In addition to my experience with front-end technologies, I have a
				strong background in back-end development. I have used Express to build
				scalable APIs and have experience with MongoDB and SQL for storing and
				querying data. I have also used Prisma and Mongoose, to simplify
				database interactions and make it easier to build efficient and flexible
				APIs.
			</p>
			<p>
				I have a solid understanding of design principles and have used
				Tailwindcss and Chakraui to create visually appealing and user-friendly
				applications. I have also used GraphQL to build flexible and efficient
				APIs, allowing for streamlined data fetching and manipulation.
			</p>
			<p>
				In summary, my skills in React, NextJS, Express, MongoDB, SQL, Prisma,
				Tailwindcss, Chakraui, and GraphQL have allowed me to build a wide range
				of web applications and APIs, and I am confident in my ability to
				continue learning and growing as a programmer. Thank you for considering
				my application.
			</p>
		</div>
	);
};

export default Skills;
