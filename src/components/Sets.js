import React, { useState } from 'react';
import CurrentSet from './CurrentSet';

const Sets = props => {
	const [currentSetCount, setCurrentSetCount] = useState(0);
	let first = 1;
	let second = 0;
	let third = 0;
	let fourth = 0;
	let fifth = 0;

	return (
		<div>
			<ol>
				<li>{ props.setOne } { (first) ?  currentSetCount : 0  } / 5</li>
				<li>{ props.setTwo } { (second) ? currentSetCount : 0} / 5</li>
				<li>{ props.setThree } { (third) ? currentSetCount : 0} / 5</li>
				<li>{ props.setFour } { (fourth) ? currentSetCount : 0 } / 5</li>
				<li>{ props.setFive } { (fifth) ? currentSetCount : 0} / 5</li>
			</ol>
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
