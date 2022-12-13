import React from 'react';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="text-center p-3 mt-10">
			<h3>Ivan Angjelkoski - &copy; {new Date().getFullYear()}</h3>
		</div>
	);
};

export default Footer;
