import React, { useState, useEffect, useRef } from 'react';
import CurrentSet from './CurrentSet';

import { useSelector, useDispatch } from 'react-redux';
import { addToList } from '../features/setsList/setsListSlice';

const Sets = props => {
	const [currentSetCount, setCurrentSetCount] = useState(0);
	
	// figuring out redux-react
	const setList = useSelector(state => state.setsList);
	const dispatch = useDispatch();


	return (
		<div>
			{setList.sets.map(set => <p>{set}</p>)}
			<button onClick={() => dispatch(addToList('one more exercise'))}>
				add exercise
			</button>
		</div>
	);
};

export default Sets;
