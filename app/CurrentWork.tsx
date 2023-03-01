import React from "react";
import InjectiveLogo from "./InjectiveLogo";

type Props = {};

const CurrentWork = (props: Props) => {
	return (
		<div className='border-t border-white py-5'>
			<h1 className='text-2xl'>Working at</h1>
			<div className='flex justify-center'>
				<a
					target={"_blank"}
					href='https://injective.com/'
					className='flex items-center  my-5 group'
				>
					<div className='flex flex-col items-center'>
						<InjectiveLogo />
						<p className='tracking-wider text-lg bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:to-blue-300'>
							Frontend Engineer
						</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default CurrentWork;
