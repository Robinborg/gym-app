import React, { useState, useEffect, useRef } from 'react';
import CurrentSet from './CurrentSet';

const Sets = props => {
	const [currentSetCount, setCurrentSetCount] = useState(0);
	const first = useRef(true);
	const second = useRef(false);
	const third = useRef(false);
	const fourth = useRef(false);
	const fifth = useRef(false);

	useEffect(() => {
		if (currentSetCount === 5) {
			if (!second.current && first.current) {
				second.current = true;
				first.current = false;
			} else if (!third.current && second.current) {
				third.current = true;
				second.current = false;
			} else if (!fourth.current && third.current) {
				fourth.current = true;
				third.current = false;
			} else if (!fifth.current && fourth.current) {
				fifth.current = true;
				fourth.current = false;
			} else {
				alert("done working out");
		};
		}
	}, [currentSetCount]);

	return (
		<div>
			<ol>
				<li>{ props.setOne } { (first.current) ?  currentSetCount : (second.current || third.current || fourth.current || fifth.current) ? 5 : 0  } / 5</li>
				<li>{ props.setTwo } { (second.current) ? currentSetCount : (third.current || fourth.current || fifth.current) ? 5 : 0 } / 5</li>
				<li>{ props.setThree } { (third.current) ? currentSetCount : (fourth.current || fifth.current) ? 5 : 0 } / 5</li>
				<li>{ props.setFour } { (fourth.current) ? currentSetCount : (fifth.current) ? 5 : 0 } / 5</li>
				<li>{ props.setFive } { (fifth.current) ? currentSetCount : 0 } / 5</li>
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
