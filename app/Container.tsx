import React, { HTMLAttributes, ReactNode } from 'react';

const Container = ({
	children,
	className,
	...props
}: {
	children: ReactNode;
	className?: string;
	props?: React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
}) => {
	return (
		<div
			{...props}
			className={`max-w-3xl px-4 mx-auto ${className}`}
		>
			{children}
		</div>
	);
};

export default Container;
