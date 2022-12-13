import React from 'react';

type Props = {
	children: any;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, ...props }: Props) => {
	return (
		<button
			className="border p-2 rounded-lg hover:bg-white/20 transition-all duration-200 active:opacity-80"
			{...props}
		>
			{children}
		</button>
	);
};

export default IconButton;
