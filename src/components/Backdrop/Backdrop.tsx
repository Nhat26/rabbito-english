import React from 'react';

type BackdropType = {
	onClick: () => void;
};

const Backdrop = (props: BackdropType) => {
	return (
		<div
			className="absolute w-[100%] h-[100vh] top-0 z-10 opacity-[0.2]"
			onClick={props.onClick}
		></div>
	);
};

export default Backdrop;
