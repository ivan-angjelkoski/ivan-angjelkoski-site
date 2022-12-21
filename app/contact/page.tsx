import Image from 'next/image';
import React from 'react';
import Container from '../Container';
import Spinner from '../Spinner';
import { FaGithub, FaTwitter, FaPhone } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { IconType } from 'react-icons';

type Props = {};
type ContactType = {
	icon: IconType;
	label: string;
	href: string;
};

const contactLinks = [
	{
		icon: GoMail,
		label: 'ivanangelkoski95@gmail.com',
		href: 'mailto:ivanangelkoski95@gmail.com',
	},
	{
		icon: FaPhone,
		label: '+389-78-418-009',
		href: 'tel:+38978418009',
	},
	{
		icon: FaGithub,
		label: 'ivan-angjelkoski',
		href: 'https://github.com/ivan-angjelkoski',
	},
	{
		icon: FaTwitter,
		label: 'ivan_angjelkoski',
		href: 'https://twitter.com/ivan_angelkoski',
	},
];

function calculateAge(dateBorn: string) {
	const born = new Date(dateBorn).getTime();
	const now = Date.now();
	const age = new Date(now - born).getFullYear() - 1970;
	return age;
}

const ContactPage = (props: Props) => {
	return (
		<Container>
			<Image
				alt="Ivan"
				width={300}
				height={300}
				style={{ objectFit: 'cover' }}
				src={'/ivan_ang.jpg'}
				className="w-44 h-44 rounded-[50%] mx-auto my-10"
			/>
			<div className="font-rounded">
				<div className="border-b-2 pb-4">
					<h1 className="text-center text-3xl">
						Ivan Angjelkoski,{calculateAge('1995-01-25')}
					</h1>
					<p className="text-center">North Macedonia - Gostivar</p>
				</div>
				<ul className="space-y-4 mt-5">
					{contactLinks.map((contact) => (
						<li key={contact.href}>
							<a
								target="_blank"
								referrerPolicy="no-referrer"
								href={contact.href}
								className="flex items-center space-x-2 text-xl hover:text-blue-300 transition-all duration-300"
							>
								<contact.icon className="text-3xl" />
								<span>{contact.label}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</Container>
	);
};

export default ContactPage;
