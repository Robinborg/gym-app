import React, { useState, useEffect, useRef } from 'react';
import CurrentSet from './CurrentSet';

import { useSelector, useDispatch } from 'react-redux';
import { addToList } from './setsListSlice';

const Sets = () => {
	
	const setList = useSelector(state => state.setsList);
	const dispatch = useDispatch();

	return (
		<div>
			{setList.map(set =>  (
			  <p key={set}>
			    {set} 0 / 5
			  </p>
			))}
			<CurrentSet />
		</div>
	);
};

export default Sets;
