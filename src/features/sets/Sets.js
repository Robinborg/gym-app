import React, { useState, useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addToList, incrementFirstRep, incrementSecondRep, incrementThirdRep,
         incrementFourthRep, incrementFifthRep } from './setsListSlice';
import '../../app/style.css';

const Sets = () => {
	
	const exerciseList = useSelector(state => state.setsList.exerciseList);
	const firstRep = useSelector(state => state.setsList.firstRep);
	const secondRep = useSelector(state => state.setsList.secondRep);
	const thirdRep = useSelector(state => state.setsList.thirdRep);
	const fourthRep = useSelector(state => state.setsList.fourthRep);
	const fifthRep = useSelector(state => state.setsList.fifthRep);
	const dispatch = useDispatch();

	const [first, second, third, fourth, fifth] = exerciseList;

	const onClickIncrementFirst = () => {
		dispatch(incrementFirstRep());
	}
	const onClickIncrementSecond = () => {
		dispatch(incrementSecondRep());
	}
	const onClickIncrementThird = () => {
		dispatch(incrementThirdRep());
	}
	const onClickIncrementFourth = () => {
		dispatch(incrementFourthRep());
	}
	const onClickIncrementFifth = () => {
		dispatch(incrementFifthRep());
	}

	return (
		<div>
			{!exerciseList.length <= 0 && <div className={"exercise-list"}>
			<p>{ first }: { firstRep } / 5</p>
				<button onClick={onClickIncrementFirst}>
					Increase One
				</button>
			<p>{ second }: { secondRep } / 5</p>
				<button onClick={onClickIncrementSecond}>
					Increase Two
				</button>
			<p>{ third }: { thirdRep } / 5</p>
				<button onClick={onClickIncrementThird}>
					Increase Third
				</button>
			<p>{ fourth }: { fourthRep } / 5</p>
				<button onClick={onClickIncrementFourth}>
					Increase Fourth
				</button>
			<p>{ fifth }: { fifthRep } / 5</p>
				<button onClick={onClickIncrementFifth}>
					Increase Fifth 
				</button>
		</div>
			}
		</div>
	);
};

export default Sets;
