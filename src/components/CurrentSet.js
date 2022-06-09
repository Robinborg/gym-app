import React, { useState } from 'react';
import PauseButton from './PauseButton';

const CurrentSet = () => {
	const [currentSetCount, setCurrentSetCount] = useState(0);
	const onClickIncrement = () => {
		setCurrentSetCount(currentSetCount + 1);
		if (currentSetCount === 5) {
			setCurrentSetCount(1);
		}
	};
	return (
		<div>
			<div>
				<h3>{currentSetCount}</h3>
			</div>
			<div onClick={onClickIncrement}>
				<PauseButton />
			</div>
		</div>
	);
};

export default CurrentSet;
