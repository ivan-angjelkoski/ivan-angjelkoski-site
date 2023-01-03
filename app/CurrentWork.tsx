import React from 'react';

type Props = {};

const CurrentWork = (props: Props) => {
	return (
		<div className="border-t border-white py-5">
			<h1 className="text-2xl">Employment History</h1>
			<div className="flex justify-center">
				<a
					target={'_blank'}
					href="https://drweb.mk/"
					className="flex items-center space-x-2 my-5 hover:text-blue-400"
				>
					<img
						className="w-20 h-20 object-cover"
						src="https://media.licdn.com/dms/image/C4D0BAQFGx02zsodRSQ/company-logo_200_200/0/1617206593474?e=1680739200&v=beta&t=sM21XgcH1W8gkhzv4qctmfE0qEhcpiqj7_LhFnsiUpw"
					/>
					<div>
						<h2 className="text-2xl transition-cplors duration-200">
							DrWeb Solutions
						</h2>
						<p className="opacity-70 transition-colors duration-200">
							2023/Jan - Present
						</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default CurrentWork;
