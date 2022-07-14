/*
 * Combine all of the components
 */
import React, { useState } from 'react';

import MainTimer from '../features/timers/MainTimer';
import Timer from '../features/timers/Timer';
import Sets from '../features/sets/Sets';
import ExerciseEntryForm from './ExerciseEntryForm';
import './style.css';


const App = () => {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="justify-middle">
			{!isActive && <ExerciseEntryForm />}
			<MainTimer isActive={isActive}/>
			<div>
				{!isActive && <button  
					className="start-button"
					onClick={() => {
						if (!isActive) {
						  setIsActive(!isActive);
						} else {
							console.log("Timer is running already");
						}
					}}>
			    	Start Session 
			  	</button>
				}
			</div>
			<Sets />
			<Timer />
		</div>
	);
};

export default App;
