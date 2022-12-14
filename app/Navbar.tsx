'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Container from './Container';
import IconButton from './IconButton';
import { AiOutlineMenu } from 'react-icons/ai';
import { linkSync } from 'fs';
// import { usePathname } from 'next/navigation';

type Props = {};

export type NavLinkType = {
	href: string;
	label: string;
};

const NAV_LINKS: NavLinkType[] = [
	{ label: 'Home', href: '/' },
	{ label: 'Contact', href: '/contact' },
	{ label: 'Blog', href: '/blog' },
];

const Navbar = (props: Props) => {
	// const pathname = usePathname();
	// useEffect(() => {
	// 	setIsOpen(false);
	// }, [pathname]);
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			setIsOpen(false);
		};
		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);
	const [isOpen, setIsOpen] = useState(false);

	const onToggle = () => {
		setIsOpen((p) => !p);
	};
	return (
		<div
			className="font-mono"
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<Container className="relative">
				<div className="flex justify-between items-center py-2">
					<Link
						href={'/'}
						className="text-xl"
					>
						&lt;Ivan Angjelkoski<span className="animate-pulse">&#47;</span>&gt;
					</Link>
					<div className="hidden md:block">
						<NavMenuDesktop links={NAV_LINKS} />
					</div>
					<div className="block md:hidden">
						<IconButton onClick={onToggle}>
							<AiOutlineMenu />
						</IconButton>
					</div>
				</div>
				{isOpen && (
					<>
						<div className="md:hidden bg-brand-800 rounded-lg p-4 absolute top-full left-5 right-5">
							<ul className="">
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<Link
											onClick={onToggle}
											className="block hover:bg-white/10 p-2 rounded-lg hover:text-indigo-300"
											href={link.href}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</>
				)}
			</Container>
		</div>
	);
};

const NavMenuDesktop = ({ links }: { links: NavLinkType[] }) => {
	return (
		<ul className="flex space-x-4">
			{links.map((link) => (
				<NavItemDesktop
					key={link.href}
					link={link}
				/>
			))}
		</ul>
	);
};

const NavItemDesktop = ({ link }: { link: NavLinkType }) => {
	return (
		<li>
			<Link
				className="p-2 inline-block linkAnimation"
				href={link.href}
			>
				{link.label}
			</Link>
		</li>
	);
};

export default Navbar;
