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
				<h3>{currentSetCount} / 5</h3>
			</div>
			<div>
				<PauseButton onClickIncrement={onClickIncrement}/>
			</div>
		</div>
	);
};

export default CurrentSet;
