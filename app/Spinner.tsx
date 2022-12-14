import React from 'react';

type Props = {};

const Spinner = (props: Props) => {
	return (
		<div className="w-20 h-20 rounded-[50%] border-4 border-transparent border-l-blue-300 animate-spin mx-auto my-5"></div>
	);
};

export default Spinner;
