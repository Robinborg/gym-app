import React, { useState, useEffect, useRef } from 'react';
import CurrentSet from './CurrentSet';

const Sets = props => {
	const [currentSetCount, setCurrentSetCount] = useState(0);

	return (
		<div>
			<div className="exercise-list">
				{ props.sets.map(set => {
					return (<div key={set}>
						<h3>{set} {currentSetCount} / 5</h3>
					</div>
					);
				}) }
			</div>
			<div>
				<CurrentSet 
					currentSetCount={currentSetCount}
					setCurrentSetCount={setCurrentSetCount}
				/>
			</div>
		</div>
	);
};

export default Sets;
