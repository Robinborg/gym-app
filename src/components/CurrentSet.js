import React from 'react';
import PauseButton from './PauseButton';

const CurrentSet = ({ currentSetCount, setCurrentSetCount}) => { 
	const onClickIncrement = () => {
		setCurrentSetCount(currentSetCount + 1);
		if (currentSetCount === 5) {
			setCurrentSetCount(0);
		}
	};
	return (
		<div>
			<div>
				<h3>{ currentSetCount } / 5</h3>
			</div>
			<div>
				<PauseButton onClickIncrement={onClickIncrement}/>
			</div>
		</div>
	);
};

export default CurrentSet;
