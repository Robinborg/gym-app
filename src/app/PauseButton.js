import React from 'react';

import Timer from '../features/timers/Timer';

const PauseButton = ({ onClickIncrement }) => {

	return (
		<div>
			<Timer onClickIncrement={onClickIncrement}/>
		</div>
	);
};

export default PauseButton;
