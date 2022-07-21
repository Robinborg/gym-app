/*
 * Sets component that displays the user entered exercises,
 * and current exercises repetition 
 */
import React from 'react';

import { useSelector } from 'react-redux';
//import '../../app/style.css';

const Sets = () => {
	
	const exerciseList = useSelector(state => state.setsList.exerciseList);
	const firstRep = useSelector(state => state.setsList.firstRep);
	const secondRep = useSelector(state => state.setsList.secondRep);
	const thirdRep = useSelector(state => state.setsList.thirdRep);
	const fourthRep = useSelector(state => state.setsList.fourthRep);
	const fifthRep = useSelector(state => state.setsList.fifthRep);

	const [first, second, third, fourth, fifth] = exerciseList;

	const displaySecondRep = () => {
		if (second) {
			if (firstRep >= 5 && secondRep < 5) {
			return (
			<p className={'highlight'}>
				{ second }: { secondRep } / 5
			</p>
			);
			} else {
				return <p>{ second }: { secondRep } / 5 </p>
			}
		}else {
			return null;
		}
	}
	const displayThirdRep = () => {
		if (third) {
			if (secondRep >= 5 && thirdRep < 5) {
			return (
			<p className={'highlight'}>
				{ third }: { thirdRep } / 5
			</p>
			);
			} else {
				return <p>{ third }: { thirdRep } / 5 </p>
			}
		} else {
			return null;
		}
	}
	const displayFourthRep = () => {
		if (fourth) {
			if (thirdRep >= 5 && fourthRep < 5) {
			return (
			<p className={'highlight'}>
				{ fourth }: { fourthRep } / 5
			</p>
			);
			} else {
				return <p>{ fourth }: { fourthRep } / 5 </p>
			}
		} else {
			return null;
		}
	}
	const displayFifthRep = () => {
		if (fifth) {
			if (fourthRep >= 5 && fifthRep < 5) {
			return (
			<p className={'highlight'}>
				{ fifth }: { fifthRep } / 5
			</p>
			);
			} else {
				return <p>{ fifth }: { fifthRep } / 5 </p>
			}
		} else {
			return null;
		}
	}
	return (
		<div>
			{!exerciseList.length <= 0 && <div className={"exercise-list"}>
				{firstRep < 5 
					? <p className={'highlight'}>
					   { first }: { firstRep } / 5
				    </p>
				: <p>{ first }: { firstRep } / 5 </p>
				}
				{displaySecondRep()}
				{displayThirdRep()}
				{displayFourthRep()}
				{displayFifthRep()}
		</div>
			}
		</div>
	);
};

export default Sets;
