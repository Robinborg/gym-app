import React from 'react';
import PauseButton from './PauseButton';

const CurrentSet = ({ currentSet, setCurrentSet }) => {
	const onClickIncrement = () => {
		setCurrentSet(currentSet + 1);
		if (currentSet === 5) {
			setCurrentSet(1);
		}
	};
	return (
		<div>
			<div>
				{currentSet}
			</div>
			<div onClick={onClickIncrement}>
				<PauseButton />
			</div>
		</div>
	);
};

export default CurrentSet;
