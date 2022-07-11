import React, { useState, useEffect, useRef } from 'react';
import CurrentSet from './CurrentSet';

import { useSelector, useDispatch } from 'react-redux';
import { addToList } from './setsListSlice';

const Sets = props => {
	const [currentSetCount, setCurrentSetCount] = useState(0);
	
	// figuring out redux-react
	const setList = useSelector(state => state.setsList);
	const dispatch = useDispatch();

	return (
		<div>
			{setList.sets.map(set =>  (
			  <p key={set}>
			    {set}
			  </p>
			))}
			<CurrentSet />
		</div>
	);
};

export default Sets;
