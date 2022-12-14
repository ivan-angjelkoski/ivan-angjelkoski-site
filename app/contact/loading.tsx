import React from 'react';
import Spinner from '../Spinner';

type Props = {};

const loading = (props: Props) => {
	return (
		<div>
			<Spinner />
		</div>
	);
};

export default loading;
