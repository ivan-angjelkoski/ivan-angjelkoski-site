import React, { ReactNode } from 'react';
import Footer from '../Footer';

type Props = {
	children: ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div>
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
